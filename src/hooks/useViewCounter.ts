import { useEffect, useState } from 'react';

interface ViewCounterResult {
  views: number;
  isLoading: boolean;
  error: string | null;
}

/**
 * Hook to track and display view count for a blog post
 * @param slug - The blog post slug
 * @param shouldIncrement - Whether to increment the view count (default: true)
 */
export function useViewCounter(slug: string, shouldIncrement = true): ViewCounterResult {
  const [views, setViews] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const trackView = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (shouldIncrement) {
          // Check localStorage to prevent duplicate increments
          const storageKey = `viewed_${slug}`;
          const lastViewed = localStorage.getItem(storageKey);
          const now = Date.now();
          const oneHour = 60 * 60 * 1000;

          // If viewed within last hour, just fetch count
          if (lastViewed && now - parseInt(lastViewed, 10) < oneHour) {
            const response = await fetch(`/api/views/${encodeURIComponent(slug)}`);
            const data = await response.json();
            setViews(data.views || 0);
          } else {
            // Increment view count
            const response = await fetch(`/api/views/${encodeURIComponent(slug)}`, {
              method: 'POST',
            });
            const data = await response.json();
            setViews(data.views || 0);

            // Store timestamp in localStorage
            if (data.incremented) {
              localStorage.setItem(storageKey, now.toString());
            }
          }
        } else {
          // Just fetch current count without incrementing
          const response = await fetch(`/api/views/${encodeURIComponent(slug)}`);
          const data = await response.json();
          setViews(data.views || 0);
        }
      } catch (err) {
        console.error('Error tracking view:', err);
        setError('Failed to load views');
      } finally {
        setIsLoading(false);
      }
    };

    trackView();
  }, [slug, shouldIncrement]);

  return { views, isLoading, error };
}

/**
 * Hook to fetch view counts for multiple posts (for listing pages)
 * @param slugs - Array of blog post slugs
 */
export function useBatchViewCounter(slugs: string[]): Record<string, number> {
  const [viewCounts, setViewCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!slugs || slugs.length === 0) return;

    const fetchBatchViews = async () => {
      try {
        const response = await fetch('/api/views/batch', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ slugs }),
        });

        if (response.ok) {
          const data = await response.json();
          setViewCounts(data);
        }
      } catch (err) {
        console.error('Error fetching batch views:', err);
      }
    };

    fetchBatchViews();
  }, [slugs.join(',')]); // eslint-disable-line react-hooks/exhaustive-deps

  return viewCounts;
}
