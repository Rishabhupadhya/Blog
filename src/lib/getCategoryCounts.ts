import { getAllBlogs } from "./getBlogs";
import { getAllSystemDesignPosts } from "./getSystemDesign";
import { getAllBackendEngineeringPosts } from "./getBackendEngineering";
import { getAllCloudDevOpsPosts } from "./getCloudDevOps";
import { getAllAIMLPosts } from "./getAIML";

/**
 * Get post counts for all categories
 * This function is used to dynamically calculate blog counts on the homepage
 */
export function getCategoryCounts() {
  return {
    technology: getAllBlogs().length,
    systemDesign: getAllSystemDesignPosts().length,
    backendEngineering: getAllBackendEngineeringPosts().length,
    cloudDevOps: getAllCloudDevOpsPosts().length,
    aiMl: getAllAIMLPosts().length,
  };
}
