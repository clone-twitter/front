import React, { useEffect } from "react";
import SideMenu from "../components/SideMenu";
import { Theme } from "../interfaces/Theme";
import { Outlet, useMatch, useNavigate } from "react-router-dom";
import ConnexionBanner from "../components/ConnexionBanner";
import useAuth from "../hooks/auth";

interface Props {
  theme: Theme,
}

const Layout = ({theme}: Props) => {

  const match = useMatch("/")
  const navigate = useNavigate()
  const auth = useAuth()

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
      {
        !auth?.user &&
        <ConnexionBanner/>
      }
    </div>
  )
}

export default Layout