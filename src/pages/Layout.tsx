import React from "react";
import SideMenu from "../components/SideMenu";
import { Theme } from "../interfaces/Theme";
import { Outlet } from "react-router-dom";

interface Props {
  theme: Theme,
}

const Layout = ({theme}: Props) => {
  return (
    <div className="container">
      <SideMenu
        theme={theme as Theme}
        img="goku.jpeg"
        name="My Name"
        id="ItsMyId"
      />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout