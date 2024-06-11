import React from "react";
import { Link } from "react-router-dom";
import { PostType } from "./data/types";

type TodoProps = {
  post: PostType;
};

const Article: React.FC<TodoProps> = (props) => {
  const { title, thumbnailUrl, createdAt, categories, content } = props.post;
  return (
    <>
      <div className="mb-3 border-stone-500 border hover:border-stone-700">
        <Link to="/contact">
          <div className="p-3">
            <div>{title}</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Article;
