import React from "react";
import Image from "next/image";
import Logo from "../../assets/logo-white.svg";
import Link from "next/link";
import LinksList from "./LinksList/LinksList";
import Subscriber from "../ui/Subscriber/Subscriber";
import Button from "../ui/Button/Button";

import s from "./Footer.module.scss";
import getFooterLinks from "@/app/api/footerLinks";

async function Footer() {
  const links = await getFooterLinks();

  return (
    <footer>
      <div className="container flex justify-between">
        <div className={s.leftSide}>
          <div className={s.copyrightsWrapper}>
            <Link href={"/"}>
              <Image src={Logo} width={130} height={31} alt="footer-logo" />
            </Link>
            <p>© НАЗВАНИЕ 2023. Все права защищены</p>
          </div>

          <div className={s.linksWrapper}>
            <LinksList links={links.mainPages} />
            <LinksList links={links.servicePages} />
          </div>
        </div>

        <div className={s.rightSide}>
          <div className={s.feedback}>
            <p>
              По любым вопросам пишите на{" "}
              <a href="mailto:privet@yandex.com">privet@yandex.com</a>
            </p>
            <Subscriber />
          </div>
          <div className={s.btnWrapper}>
            <Button text="Предложить новость" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
