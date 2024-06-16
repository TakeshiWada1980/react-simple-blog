import axios from "axios";

// 引数で指定された遅延時間後にデータを返すFetcherを得る高階関数
export const delayedFetcher = (delay: number = 2000) => {
  return async (url: string) => {
    const { data } = await axios.get(url);
    if (delay > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay)); // 遅延演出
    }
    return data;
  };
};
