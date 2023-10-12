import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.svg";
import CalendarIcon from "../../assets/icons/icons_calendar.svg";
import LoginIcon from "../../assets/icons/icons_login.svg"
import HeaderWidget from "./HeaderWidgets/HeaderWidget";
import SearchBar from "./SearchBar/SearchBar";

import s from "./Header.module.scss";
import getWidgetsData from '../../api/widgetsApi'
import dateFormat from "@/app/utils/dateFormatter";

const now = new Date();
const date = dateFormat(now)

async function Header() {
 const data = await getWidgetsData()


  return (
    <header className={s.siteHeader}>
      <div className='container flex justify-between align-center'>
        <div className={s.headerLeftSide}>
          <Link href='/'>
          <Image src={Logo} alt="logo"/>
          </Link>
          <div className={s.widgetsWrapper}>
            <HeaderWidget 
              value={date}
              iconSrc={CalendarIcon.src}
              />
            {data && data.map( item => (
              <HeaderWidget 
                key={item}
                value={item.value}
                iconSrc={item.icon.src}
                />
            ) )}
          </div>
        </div>

        <div className={s.iconsWrapper}>
              <SearchBar/>
              <Image
                src={LoginIcon}
                width={36}
                height={36}
                alt="login-icon"
                />
        </div>
      </div>
    </header>
  );
}

export default Header;
