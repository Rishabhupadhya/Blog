export interface Post {
  slug: string;
  content: string;
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
  [key: string]: any;
}
