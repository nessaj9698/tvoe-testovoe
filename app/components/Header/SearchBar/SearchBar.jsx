"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import searchIcon from "../../../assets/icons/icons_search.svg";

import s from "./SearchBar.module.scss";

function SearchBar() {
  const [isSearchActive, setSearchActive] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    fetch("backendLink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
  };

  return (
    <div className={s.searchBarWrapper}>
      {isSearchActive && (
        <form>
          <input type="search" value={value} onChange={handleChange} />
          {value && (
            <input
              type="submit"
              value=""
              onSubmit={handleSubmit}
              className={s.searchSubmit}
            />
          )}
        </form>
      )}
      <Image
        src={searchIcon}
        width={36}
        height={36}
        alt="search-icon"
        onClick={() => setSearchActive(!isSearchActive)}
      />
    </div>
  );
}

export default SearchBar;
