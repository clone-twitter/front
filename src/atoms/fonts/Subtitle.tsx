import React from "react";

interface Props {
  text: string,
  theme?: 'LightTheme' | 'DarkTheme'
}

const Subtitle = ({text, theme}: Props) => {
  return (
    <h3 className={`${theme}`}>
      {text}
    </h3>
  )
}

export default Subtitle