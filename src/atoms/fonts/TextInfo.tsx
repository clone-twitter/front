import React from "react";

interface Props {
  text: string,
  theme: 'DarkTheme' | 'LightTheme'
}

const Textinfo = ({text, theme}: Props) => {
  return (
    <p className={`info ${theme}`}>
      {text}
    </p>
  )
}

export default Textinfo