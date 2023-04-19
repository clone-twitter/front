import React from "react";
import { State } from "../interfaces/Theme";
import useTheme from "../hooks/theme";

interface Props {
  name: string,
  state?: State,
}

const Logo = ({name, state}: Props) => {

const theme = useTheme()

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