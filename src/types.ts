export type Post = {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
};

export type BlogPostResponse = {
  message: string;
  post: Post;
};

export type BlogPostsResponse = {
  message: string;
  posts: Post[];
};
