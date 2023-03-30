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
          <img src={`/icons/${theme}/${name}/${state}.svg`} alt={name} />
        ) : (
          <img src={`/icons/${theme}/${name}.svg`} alt={name} />
        )
      }
      
    </span>
  )
}

export default Logo