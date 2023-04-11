import React from "react";
import Title from '../atoms/fonts/Title'
import Logo from '../atoms/Logo'
import { State, Theme } from "../interfaces/Theme";
import { Link } from "react-router-dom";

interface Props {
  theme: Theme,
  name: string,
  state?: State,
  title: string,
  handleClick: React.MouseEventHandler<HTMLElement>
}

const MenuItem = ({theme, name, state, title, handleClick}: Props) => {
  return (
    <Link to={`/${name.toLowerCase()}`}>
      <div 
        className="menu_item"
        onClick={handleClick}
      >
        
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
    </Link>
  )
}

export default MenuItem