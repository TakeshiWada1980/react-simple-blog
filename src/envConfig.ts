import { urlPattern } from "./utils/common";

// 環境変数から取得した値を定数としてエクスポート

// ブログ記事APIのエンドポイント
// NOTE:検証対象のエンドポイントが増えたときは汎用的な関数に変更
const getPostsApiEndpoint = () => {
  const endpoint = process.env.REACT_APP_POSTS_API_ENDPOINT;
  if (!endpoint) {
    throw new Error("REACT_APP_POSTS_API_ENDPOINT is not defined");
  }
  if (!urlPattern.test(endpoint)) {
    throw new Error("REACT_APP_POSTS_API_ENDPOINT is not a valid URL");
  }
  return endpoint;
};

// 検証済みエンドポイントを変数に代入
export const postsApiEndpoint = getPostsApiEndpoint();

// 開発環境かどうか
export const isDevelopmentEnv =
  process.env.REACT_APP_IS_DEVELOPMENT_ENV === "true";
