import React from "react";
import { State, Theme } from "../interfaces/Theme";

interface Props {
  theme: Theme,
  name: string,
  state?: State,
}

const Logo = ({theme, name, state}: Props) => {
  return (
    <span className="logo">
      {
        state ? (
          <img src={`${process.env.PUBLIC_URL}/icons/${theme}/${name}/${state}.svg`} alt={name} />
        ) : (
          <img src={`${process.env.PUBLIC_URL}/icons/${theme}/${name}.svg`} alt={name} />
        )
      }
      
    </span>
  )
}

export default Logo