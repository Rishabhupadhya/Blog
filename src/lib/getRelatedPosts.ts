import { Post } from "@/types/post";
import { shuffleArray } from "./shuffle";

/**
 * Get related posts for a given blog post
 * 
 * Algorithm:
 * 1. Exclude the current post
 * 2. Prefer posts that share at least one tag
 * 3. Fallback to any other posts if no tag matches
 * 4. Shuffle the results for variety
 * 5. Limit to specified number
 * 
 * @param allPosts - Complete list of posts
 * @param currentPost - The currently viewed post
 * @param limit - Maximum number of related posts to return (default: 3)
 * @returns Array of related posts (shuffled)
 */
export function getRelatedPosts(
  allPosts: Post[],
  currentPost: Post,
  limit: number = 3
): Post[] {
  // Step 1: Exclude the current post
  const otherPosts = allPosts.filter((post) => post.slug !== currentPost.slug);
  
  // If no other posts exist, return empty array
  if (otherPosts.length === 0) {
    return [];
  }
  
  // Step 2: Find posts that share at least one tag
  const currentTags = currentPost.tags || [];
  const postsWithMatchingTags = otherPosts.filter((post) => {
    const postTags = post.tags || [];
    // Check if any tag matches
    return postTags.some((tag) => currentTags.includes(tag));
  });
  
  // Step 3: Determine which posts to use
  let candidatePosts: Post[];
  
  if (postsWithMatchingTags.length > 0) {
    // Prefer posts with matching tags
    candidatePosts = postsWithMatchingTags;
  } else {
    // Fallback to any other posts
    candidatePosts = otherPosts;
  }
  
  // Step 4: Shuffle for randomization
  const shuffledPosts = shuffleArray(candidatePosts);
  
  // Step 5: Limit to specified number
  return shuffledPosts.slice(0, limit);
}
