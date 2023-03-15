import React from "react";

interface Props {
  text: string,
  theme: 'DarkTheme' | 'LightTheme'
}

const Textcontent = ({text, theme}: Props) => {
  return (
    <p className={`content ${theme}`}>
      {text}
    </p>
  )
}

export default Textcontent