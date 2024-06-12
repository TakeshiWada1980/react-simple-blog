import React from "react";
import { Link } from "react-router-dom";
import { PostType } from "./types";
import { formatIso8601ToJpDateTime } from "./utils/dateTimeUtils";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import CategoryTag from "./CategoryTag";

type ArticleSimmaryProps = {
  post: PostType;
};

const ArticleSimmary: React.FC<ArticleSimmaryProps> = (props) => {
  const { title, thumbnailUrl, createdAt, categories, content } = props.post;

  const createdAt2 = formatIso8601ToJpDateTime(createdAt);

  // HTMLタグを除去して先頭N文字を取得
  const n = 100;
  const planeTextContent = content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
  const summaryContent =
    planeTextContent.length > n
      ? `${planeTextContent.slice(0, n)}...`
      : planeTextContent;

  // 無害化
  // const sanitizedContent: string = DOMPurify.sanitize(content);

  return (
    <>
      <div className="mb-4 border-stone-500 border hover:border-stone-700">
        <Link to="/article">
          <div className="p-3">
            <div className="flex justify-between items-center">
              {/* 日付 */}
              <div className="text-xs text-stone-500">{createdAt2}</div>
              {/* カテゴリ */}
              <div className="flex items-center space-x-1">
                {categories.map((category) => (
                  <CategoryTag name={category} key={category} />
                ))}
              </div>
            </div>
            {/* タイトル */}
            <div className="text-xl font-bold mb-3">{title}</div>
            {/* 本文 */}
            <div className="mx-3">{summaryContent}</div>
            {/* <div>{parse(sanitizedContent)}</div> */}
          </div>
        </Link>
      </div>
    </>
  );
};

export default ArticleSimmary;
