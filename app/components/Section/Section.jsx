import React from "react";
import Link from "next/link";
import Arrow from "../../assets/icons/arrows.svg";
import Image from "next/image";

import s from "./Section.module.scss";

function Section({ title,isPadding,isBgWhite, children }) {
  let sectionClasses = ''
  if (isPadding) sectionClasses += 'padding-section'
  if (isBgWhite) sectionClasses += ' bg-white'

  return (
    <section
      className={s.fullwidthSection + ' ' + `${sectionClasses}`}
    >
      <div className='flex align-center'>
        <h2 className={s.sectionTitle}>
          <Link href={"/"}>{title}</Link>
        </h2>
        <Link href={"/"}>
          <Image src={Arrow} width={24} height={24} alt="arrow-icon" />
        </Link>
      </div>
      {children}
    </section>
  );
}

export default Section;
