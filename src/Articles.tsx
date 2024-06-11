import React from "react";
import { posts } from "./data/posts";
import Article from "./Article";

const Articles = () => {
  return (
    <>
      <div className="mt-5">
        {posts.map((post) => (
          <Article key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Articles;
