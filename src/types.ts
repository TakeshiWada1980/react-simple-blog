// ブログ記事データの型定義
export type Post = {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
};

// ブログ記事（単体）の取得APIのレスポンス
export type BlogPostResponse = {
  message: string;
  post: Post;
};

// ブログ記事（一覧）の取得APIのレスポンス
export type BlogPostsResponse = {
  message: string;
  posts: Post[];
};

// 問い合わせフォーム（Contact）のデータ
export type FormData = {
  name: string;
  email: string;
  message: string;
};

// 問い合わせフォームの送信APIのレスポンス
export type FormSubmissionResponse = {
  message: string;
  data: FormData;
};
