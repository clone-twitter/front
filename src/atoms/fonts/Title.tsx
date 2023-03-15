import React from "react";
import { State, Theme } from "../../interfaces/Theme";

interface Props {
  title: string,
  theme: Theme,
  state?: State
}

const Title = ({title, theme, state}: Props) => {
  return (
    <h2 className={`${state} ${theme}`}>
      {title}
    </h2>
  )
}

export default Title