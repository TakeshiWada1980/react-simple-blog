import React from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  return (
    <>
      <div>Article {id ? id : "id未指定"}</div>
      <div>ここにブログ記事を配置</div>
    </>
  );
};

export default Article;
