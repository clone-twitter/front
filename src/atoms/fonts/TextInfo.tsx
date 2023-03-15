import React from "react";
import { Theme } from "../../interfaces/Theme";

interface Props {
  text: string,
  theme: Theme
}

const Textinfo = ({text, theme}: Props) => {
  return (
    <p className={`info ${theme}`}>
      {text}
    </p>
  )
}

export default Textinfo