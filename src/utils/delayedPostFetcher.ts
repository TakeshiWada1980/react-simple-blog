import axios from "axios";

/**
 * 遅延時間後にデータを返すFetcherを得る高階関数
 * @param delay 遅延時間（ミリ秒）
 * @returns (url: string, data: T) => Promise<R>
 */
export const delayedPostFetcher = <T, R>(delay: number = 2000) => {
  return async (url: string, data: T): Promise<R> => {
    const response = await axios.post<R>(url, data);
    if (delay > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay)); // 遅延演出
    }
    return response.data;
  };
};
