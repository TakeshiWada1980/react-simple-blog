/**
 * URLを検証するための正規表現パターン
 * @type {RegExp}
 */
export const urlPattern = new RegExp(
  "^(https?:\\/\\/)?" + // プロトコル
    "((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|" + // ドメイン名
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // IPアドレス
    "(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*" + // ポートとパス
    "(\\?[;&a-zA-Z\\d%_.~+=-]*)?" + // クエリストリング
    "(\\#[-a-zA-Z\\d_]*)?$", // フラグメント
  "i" // 大文字小文字を区別しない
);
