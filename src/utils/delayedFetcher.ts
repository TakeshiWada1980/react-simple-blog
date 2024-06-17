import axios from "axios";

/**
 * 遅延時間後にデータを返すFetcherを得る高階関数
 * @param number
 * @returns (url: string) => Promise<any>
 */
export const delayedFetcher = (delay: number = 2000) => {
  return async (url: string) => {
    const { data } = await axios.get(url);
    if (delay > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay)); // 遅延演出
    }
    return data;
  };
};
