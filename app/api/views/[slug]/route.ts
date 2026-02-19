import { NextRequest, NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

// Helper to get client identifier (IP + User Agent hash)
function getClientId(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';
  
  // Simple hash function
  const hash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(36);
  };
  
  return hash(ip + userAgent);
}

// GET: Fetch view count for a slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const viewKey = `views:${slug}`;
    
    const views = await redis.get(viewKey);
    
    return NextResponse.json({
      slug,
      views: views ? parseInt(views, 10) : 0,
    });
  } catch (error) {
    console.error('Error fetching views:', error);
    // Return 0 views instead of error to prevent UI breaking
    const { slug } = await params;
    return NextResponse.json({
      slug,
      views: 0,
    });
  }
}

// POST: Increment view count (with duplicate protection)
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const clientId = getClientId(request);
    
    const viewKey = `views:${slug}`;
    const trackingKey = `viewed:${slug}:${clientId}`;
    
    // Check if this client already viewed this post recently
    const alreadyViewed = await redis.exists(trackingKey);
    
    if (alreadyViewed) {
      // Return current count without incrementing
      const views = await redis.get(viewKey);
      return NextResponse.json({
        slug,
        views: views ? parseInt(views, 10) : 0,
        incremented: false,
      });
    }
    
    // Increment view count
    const newViews = await redis.increment(viewKey);
    
    // Set tracking key with 1 hour expiry (prevents duplicate views)
    await redis.set(trackingKey, '1', 3600);
    
    return NextResponse.json({
      slug,
      views: newViews,
      incremented: true,
    });
  } catch (error) {
    console.error('Error incrementing views:', error);
    // Return 0 views instead of error to prevent UI breaking
    const { slug } = await params;
    return NextResponse.json({
      slug,
      views: 0,
      incremented: false,
    });
  }
}
