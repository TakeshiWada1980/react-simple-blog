import { useParams } from "react-router-dom";
import { formatIso8601ToJpDateTime } from "./utils/dateTimeUtils";
import DOMPurify from "dompurify";
import Tag from "./Tag";
import { FetchLoading } from "./FetchLoading";
import { FetchError } from "./FetchError";
import usePost from "./hooks/usePost";

const Article = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    // URL '/articles/' のとき、'/articles' にルーティングされるようにしているため、
    // ここ（/articles:id'）で、id が undefined になることはないはず
    throw new Error("Unexpected state: 'id' is undefined.");
  }

  // usePostフックで指定のエンドポイントからデータを取得
  const { data, error, isLoading, endpoint } = usePost(id);

  // Fetch failed
  if (error) {
    return <FetchError apiEndpoint={endpoint} error={error} />;
  }

  // Fetch in progress
  if (isLoading || !data) {
    return <FetchLoading msg="記事を読み込んでいます..." />;
  }

  // Fetch succeeded
  const createdAt = formatIso8601ToJpDateTime(data.post.createdAt);
  const content: string = DOMPurify.sanitize(data.post.content);
  const { thumbnailUrl, categories, title } = data.post;
  return (
    <div className="mt-5 flex flex-col justify-center">
      {/* サムネイル */}
      <img src={thumbnailUrl} alt="サムネイル画像" />
      <div className="sm:px-4">
        {/* 日付 & カテゴリ*/}
        <div className="mt-3 flex justify-between items-center">
          <div className="text-xs text-stone-500">{createdAt}</div>
          <div className="flex items-center space-x-1">
            {categories.map((category) => (
              <Tag name={category} key={category} />
            ))}
          </div>
        </div>
        {/* タイトル */}
        <div className="mt-3 text-2xl">{title}</div>
        {/* 本文 */}
        <section
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default Article;
