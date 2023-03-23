import React from "react";
import Linkify from "react-linkify"

interface Props {
  text: string,
  theme: 'DarkTheme' | 'LightTheme'
}

const Textcontent = ({text, theme}: Props) => {

  return (
    <p className={`content ${theme}`}>
      <Linkify>
        {text}
      </Linkify>
    </p>
  )
}

export default Textcontent