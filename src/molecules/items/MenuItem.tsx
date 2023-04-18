import React, { useEffect, useState } from "react";
import Title from '../../atoms/fonts/Title'
import Logo from '../../atoms/Logo'
import { State, Theme } from "../../interfaces/Theme";
import { NavLink, useMatch } from "react-router-dom";

interface Props {
  theme: Theme,
  name: string,
  title: string,
}

const MenuItem = ({theme, name, title}: Props) => {

  const match = useMatch(`/${name.toLowerCase()}`)
  const [state, setState] = useState<State>("Default")

  useEffect(() => {
    setState("Default")
    match && setState("Blue")
  }, [match])

  return (
    <NavLink to={`/${name.toLowerCase()}`}>
      <div 
        className="menu_item"
      >
        <Logo
          theme={theme}
          name={name}
          state={state}
        />
        <Title
          title={title}
          state={state}
        />
      </div>
    </NavLink>
  )
}

export default MenuItem