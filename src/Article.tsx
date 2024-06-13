import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { posts } from "./data/posts";
import { Post } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { formatIso8601ToJpDateTime } from "./utils/dateTimeUtils";
import DOMPurify from "dompurify";
import Tag from "./Tag";

const Article = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | undefined>();

  useEffect(() => {
    // 記事の検索・取得
    const post = posts.find((post) => post.id === Number(id));
    setPost(post);
  }, []);

  // 記事が見つからなかった場合の処理
  if (!post) {
    return (
      <div className="mt-5">
        <FontAwesomeIcon className="mr-2 text-slate-800" icon={faGhost} />
        id={id || "(None)"} の投稿記事が見つかりません。
      </div>
    );
  }

  const createdAt2 = formatIso8601ToJpDateTime(post.createdAt);
  const sanitizedContent: string = DOMPurify.sanitize(post.content);

  return (
    <div className="mt-5 flex flex-col justify-center">
      {/* サムネイル */}
      <img src={post.thumbnailUrl} alt="サムネイル画像" />
      <div className="sm:px-4">
        {/* 日付 & カテゴリ*/}
        <div className="mt-3 flex justify-between items-center">
          <div className="text-xs text-stone-500">{createdAt2}</div>
          <div className="flex items-center space-x-1">
            {post.categories.map((category) => (
              <Tag name={category} key={category} />
            ))}
          </div>
        </div>
        {/* タイトル */}
        <div className="mt-3 text-2xl">{post.title}</div>
        {/* 本文 */}
        <section
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
      </div>
    </div>
  );
};

export default Article;
