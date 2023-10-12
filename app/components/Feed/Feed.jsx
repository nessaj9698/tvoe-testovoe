import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

import s from "./Feed.module.scss";

function Feed({ news, hotNews }) {
  return (
    <div className={s.feedWrapper}>
      <div className={s.feedInner}>
        <h1>Лента</h1>
        <ul>
          {news &&
            news.map((item) => (
              <li key={item.title}>
                <Link href={item.src}>
                  <p>{item.title}</p>
                  <div className={s.feedMetaWrapper}>
                    <span className={s.feedTime}>{item.time}</span>
                    <span className={s.feedCategory}>{item.category}</span>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <Marquee className={s.feedFooter} autoFill={true}>
        <Link href="">{hotNews.title}</Link>
      </Marquee>
    </div>
  );
}

export default Feed;
