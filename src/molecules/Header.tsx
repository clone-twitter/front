import React from "react";
import Title from '../atoms/fonts/Title'
import Logo from "../atoms/Logo";
import { Theme } from "../interfaces/Theme";

interface Props {
  title: string,
  theme: Theme
}

const Header = ({title, theme}: Props) => {
  return (
    <header className="header">
      <Title
        title={title}
        theme={theme}
      />
      <Logo
        theme={theme}
        name="TopTweet"
        state="Default"
      />
    </header>
  )
}

export default Header