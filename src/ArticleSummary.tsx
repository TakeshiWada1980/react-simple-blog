import React from "react";
import { Link } from "react-router-dom";
import { Post } from "./types";
import { formatIso8601ToJpDateTime } from "./utils/dateTimeUtils";
import DOMPurify from "dompurify";
import Tag from "./Tag";

type Props = {
  post: Post;
};

const ArticleSimmary: React.FC<Props> = (props) => {
  const { title, thumbnailUrl, createdAt, categories, content } = props.post;

  const createdAt2 = formatIso8601ToJpDateTime(createdAt);
  const sanitizedContent: string = DOMPurify.sanitize(content);

  return (
    <Link
      className="block mb-4 border border-stone-500 hover:border-stone-700"
      to="/article"
    >
      <div className="p-3">
        <div className="flex justify-between items-center">
          {/* 日付 */}
          <div className="text-xs text-stone-500">{createdAt2}</div>
          {/* カテゴリ */}
          <div className="flex items-center space-x-1">
            {categories.map((category) => (
              <Tag name={category} key={category} />
            ))}
          </div>
        </div>
        {/* タイトル */}
        <div className="text-xl font-bold mb-3">{title}</div>
        {/* 本文 */}
        <div
          className="mx-3 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
      </div>
    </Link>
  );
};

export default ArticleSimmary;
