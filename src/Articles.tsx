import React from "react";
import { posts } from "./data/posts";
import ArticleSimmary from "./ArticleSummary";

const Articles = () => {
  return (
    <div className="mt-5 flex flex-col justify-center ">
      {posts.map((post) => (
        <ArticleSimmary key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Articles;
