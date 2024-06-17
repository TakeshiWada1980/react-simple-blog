import ArticleSummary from "./ArticleSummary";
import { FetchLoading } from "./FetchLoading";
import { FetchError } from "./FetchError";
import usePosts from "./hooks/usePosts";

const Articles = () => {
  // usePostsフックで指定のエンドポイントからデータを取得
  // 戻り値には取得したデータ、エラー情報、ロード中かどうかの状態、エンドポイントが含まれる
  const { data, error, isLoading, endpoint } = usePosts();

  // Fetch failed
  if (error) {
    return <FetchError apiEndpoint={endpoint} error={error} />;
  }

  // Fetch in progress
  if (isLoading || !data) {
    return <FetchLoading msg="記事一覧を読み込んでいます..." />;
  }

  // Fetch succeeded
  return (
    <div className="mt-5 flex flex-col justify-center ">
      {data.posts.map((post) => (
        <ArticleSummary key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Articles;
