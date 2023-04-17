import React, { useState } from "react";
import MenuItem from "../molecules/MenuItem";
import { Theme } from "../interfaces/Theme";
import { DataItems } from "../interfaces/DataItems";
import Button from "../atoms/Button";
import Profile from "../molecules/Profile";
import useAuth from "../hooks/auth";

interface Props {
  theme: Theme
}

const dataItems: DataItems[] = [
  {
    id: 0,
    name: "Home",
    title: "Accueil",
    state: "Blue"
  },
  {
    id: 1,
    name: "Explore",
    title: "Explorer",
    state: "Default"
  },
  {
    id: 2,
    name: "Notifications",
    title: "Notifications",
    state: "Default"
  },
  {
    id: 3,
    name: "Messages",
    title: "Messages",
    state: "Default"
  },
  {
    id: 4,
    name: "Bookmarks",
    title: "Signets",
    state: "Default"
  },
  {
    id: 5,
    name: "Lists",
    title: "Listes",
    state: "Default"
  },
  {
    id: 6,
    name: "Profile",
    title: "Profile",
    state: "Default"
  },
  {
    id: 7,
    name: "More",
    title: "Plus",
    state: "Default"
  },
]

const SideMenu = ({theme}: Props) => {

  const [menuItems, setMenuItems] = useState(dataItems)
  const auth = useAuth()

  return (
    <header className="side_menu">
      <div className="wrapper">
        <div className="top">
          <h1>
            <img src={`/icons/${theme}/Logo.svg`} alt="Oiseau twitter" />
          </h1>
          <div className="menu_wrap">
            {
              menuItems.map(item => {
                return (
                  <MenuItem
                    key={item.id}
                    theme={theme}
                    name={item.name}
                    title={item.title}
                  />
                )
              })
            }
          </div>
          <div className="btn_wrap">
            <Button 
              size="big"
              type="primary"
              text="Tweeter"
            />
          </div>
        </div>
        <div className="bottom">
          <Profile
            theme={theme}
            user={auth?.user}
          />
        </div>
      </div>
    </header>
  )
}

export default SideMenu