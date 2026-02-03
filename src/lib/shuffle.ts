/**
 * Fisher-Yates shuffle algorithm
 * Properly randomizes an array in O(n) time
 * 
 * @param array - Array to shuffle (not mutated)
 * @returns New shuffled array
 */
export function shuffleArray<T>(array: T[]): T[] {
  // Create a copy to avoid mutating the original
  const shuffled = [...array];
  
  // Fisher-Yates shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Generate random index from 0 to i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements at i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}
