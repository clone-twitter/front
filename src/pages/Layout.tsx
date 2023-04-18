import React, { useEffect } from "react";
import SideMenu from "../components/SideMenu";
import { Theme } from "../interfaces/Theme";
import { Outlet, useMatch, useNavigate } from "react-router-dom";
import SideColumn from "../components/SideColumn";

interface Props {
  theme: Theme,
}

const Layout = ({theme}: Props) => {

  const match = useMatch("/")
  const navigate = useNavigate()

  useEffect(() => {
    match?.pathname === "/" && navigate("/home")
  }, [match, navigate])

  return (
    <div className="container">
      <SideMenu
        theme={theme as Theme}
      />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout