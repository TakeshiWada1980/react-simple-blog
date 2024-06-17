import { urlPattern } from "./utils/common";

/**
 * 環境変数からAPIエンドポイントを取得して有効なURLであるかを検証
 * @param {string} envVarName - 環境変数の名前
 * @returns {string} - 検証済みのAPIエンドポイントURL
 * @throws {Error} - 環境変数が未定義、無効なURLの場合に例外が発生
 */
const getApiEndpoint = (envVarName: string): string => {
  const endpoint = process.env[envVarName];
  if (!endpoint) {
    throw new Error(`${envVarName} is not defined`);
  }
  if (!urlPattern.test(endpoint)) {
    throw new Error(`${envVarName} is not a valid URL`);
  }
  return endpoint;
};

export const postsApiEndpoint = getApiEndpoint(
  "REACT_APP_BLOG_POSTS_API_ENDPOINT"
);
export const contactApiEndpoint = getApiEndpoint(
  "REACT_APP_CONTACT_API_ENDPOINT"
);

// 開発環境かどうか
export const isDevelopmentEnv =
  process.env.REACT_APP_IS_DEVELOPMENT_ENV === "true";
