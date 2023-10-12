import React from "react";
import Image from "next/image";
import Link from "next/link";
import TelegramLogo from "../../../assets/icons/telegram.svg";

import s from "./Subscriber.module.scss";

function Subscriber() {
  return (
    <div className={s.subscriberWrapper}>
      <Link href={'t.me/nessaj9698'}>
        <Image src={TelegramLogo} />
        Подписаться
      </Link>
    </div>
  );
}

export default Subscriber;
