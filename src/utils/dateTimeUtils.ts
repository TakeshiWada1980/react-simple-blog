// ISO 8601形式の日付文字列を日本の日付形式に変換する関数
export const formatIso8601ToJpDateTime = (iso8601date: string): string => {
  return new Date(iso8601date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    // hour: "2-digit",
    // minute: "2-digit"
  });
};
