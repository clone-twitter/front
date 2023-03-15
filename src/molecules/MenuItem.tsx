import React from "react";
import Title from '../atoms/fonts/Title'
import Logo from '../atoms/Logo'
import { State, Theme } from "../interfaces/Theme";

interface Props {
  theme: Theme,
  name: string,
  state?: State,
  title: string
}

const MenuItem = ({theme, name, state, title}: Props) => {
  return (
    <div className="menu_item">
      
      <Logo
        theme={theme}
        name={name}
        state={state}
      />
      <Title
        title={title}
        state={state}
        theme={theme}
      />
    </div>
  )
}

export default MenuItem