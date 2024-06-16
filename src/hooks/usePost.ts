import useSWR from "swr";
import { BlogPostResponse } from "../types";
import { delayedFetcher } from "../utils/delayedFetcher";
import { isDevelopmentEnv, postsApiEndpoint } from "../envConfig";

// ブログ記事【単体】を取得するためのカスタムフック
const usePost = (id: string) => {
  const { data, error, isLoading } = useSWR<BlogPostResponse>(
    `${postsApiEndpoint}/${id}`,
    delayedFetcher(isDevelopmentEnv ? 1000 : 0) // 開発環境では動作確認のために遅延させる
  );
  return { data, error, isLoading, endpoint: postsApiEndpoint };
};

export default usePost;
