"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import s from "./Menu.module.scss";

function Menu({ menuItems }) {
  const pathName = usePathname();


  return (
    <nav>
      <ul className={s.sidebarMenu}>
        {menuItems &&
          menuItems.map((menu) => (
            <li key={menu.title} 
                className={menu.link === pathName ? `${s.active}` : ""}>
              <Image
                src={menu.iconUrl.src}
                width={32}
                height={32}
                alt="menu-icon"
              />
              <Link href={menu.link}>{menu.title}</Link>
            </li>
          ))}
      </ul>
      
    </nav>
  );
}

export default Menu;
