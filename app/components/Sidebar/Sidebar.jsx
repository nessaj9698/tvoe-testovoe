import React from "react";
import Menu from "./Menu/Menu";

import fetchMenus from "@/app/api/menuApi";

async function Sidebar() {
  const menuData = await fetchMenus()
  
  return (
    <aside>
     <Menu menuItems={menuData}/>
    </aside>
  );
}

export default Sidebar;
