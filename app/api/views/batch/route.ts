import { NextRequest, NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

// POST: Fetch view counts for multiple slugs
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slugs } = body;
    
    if (!Array.isArray(slugs) || slugs.length === 0) {
      return NextResponse.json({ error: 'Invalid slugs array' }, { status: 400 });
    }
    
    // Limit to 100 slugs per request
    const limitedSlugs = slugs.slice(0, 100);
    
    // Create keys for all slugs
    const viewKeys = limitedSlugs.map(slug => `views:${slug}`);
    
    // Fetch all view counts in one request
    const viewCounts = await redis.mget(viewKeys);
    
    // Map slugs to their view counts
    const result: Record<string, number> = {};
    limitedSlugs.forEach((slug, index) => {
      result[slug] = viewCounts[index] ? parseInt(viewCounts[index]!, 10) : 0;
    });
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching batch views:', error);
    // Return empty object instead of error to prevent UI breaking
    return NextResponse.json({});
  }
}
