import React from "react";
import useSWR from "swr";
import { BlogPostsResponse } from "./types";
import ArticleSummary from "./ArticleSummary";
import { delayedFetcher } from "./utils/delayedFetcher";
import { FetchLoading } from "./FetchLoading";
import { FetchError } from "./FetchError";

const postsApiEndpoint =
  "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts";

const Articles = () => {
  const { data, error, isLoading } = useSWR<BlogPostsResponse>(
    postsApiEndpoint,
    delayedFetcher(2000)
  );

  // Fetch failed
  if (error) {
    return <FetchError apiEndpoint={postsApiEndpoint} error={error} />;
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
