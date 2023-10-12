import React from "react";
import Image from "next/image";
import Link from "next/link";

import s from "./PostCard.module.scss";

function PostCard({ post }) {
  return (
    <article className={s.postCard}>
      {post.thumbnail && (
        <Image
          src={post.thumbnail.src}
          width={245}
          height={164}
          style={{ objectFit: "cover", borderRadius: "0.75rem" }}
          alt="post-thumbnail"
        />
      )}
      <div className={s.postCardInner}>
        <div className={s.postMeta}>
          {post.category && (
            <Link href={`/category/${post.category}`}>{post.category}</Link>
          )}
          <span>{post.time}</span>
        </div>
        <Link href={post.link} className={s.postLink}>
          <p>{post.title}</p>
        </Link>

        {post.reactions && (
          <div className={s.reactionsWrapper}>
            {post.reactions.map((item) => (
              <div key={item.title} className={s.reactionItem}>
                <Image
                  key={item}
                  src={`${item.icon.src}`}
                  alt="post-reaction"
                  width={14}
                  height={14}
                />
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default PostCard;
