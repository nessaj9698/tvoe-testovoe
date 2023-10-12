import React from "react";
import Link from "next/link";

import s from "./AdsBanner.module.scss";

function AdsBanner({ ads }) {
  return (
    ads &&
    <div className={s.adsBannerWrapper}>
          <Link href={`${ads.link}`}>Ссылка на сайт</Link>
          <span>РЕКЛАМА</span>
          <div className={s.adsBannerInner}>
            Реклама
          </div>
          <p>{ads.title}</p>
    </div>
  );
}

export default AdsBanner;
