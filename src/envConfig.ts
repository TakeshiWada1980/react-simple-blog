import { urlPattern } from "./utils/common";

/**
 * 環境変数からAPIエンドポイントを取得して有効なURLであるかを検証
 * @param {string} envVarName - 環境変数の名前
 * @returns {string} - 検証済みのAPIエンドポイントURL
 * @throws {Error} - 環境変数が未定義、無効なURLのときは例外をスロー
 */
const getApiEndpoint = (path: string): string => {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  if (!apiBaseUrl) {
    throw new Error("REACT_APP_API_BASE_URL is not defined");
  }
  const endpoint = apiBaseUrl + path;
  if (!urlPattern.test(endpoint)) {
    throw new Error(`${endpoint} is not a valid URL`);
  }
  return endpoint;
};

// ブログ記事を取得(GET)するAPIエンドポイント
export const postsApiEndpoint = getApiEndpoint("/posts");

// お問い合わせ内容を送信(POST)するAPIエンドポイント
export const contactApiEndpoint = getApiEndpoint("/contacts");

// 開発環境かどうか
export const isDevelopmentEnv =
  process.env.REACT_APP_IS_DEVELOPMENT_ENV === "true";
