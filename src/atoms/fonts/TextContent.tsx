import React from "react";
import "linkify-plugin-mention";
import Linkify from "linkify-react"
import "linkify-plugin-hashtag";


interface Props {
  text: string,
  theme: 'DarkTheme' | 'LightTheme',
}

const Textcontent = ({text, theme}: Props) => {

  const options = {
    formatHref: {
      mention: (href: string) => href,
    },
  };

  return (
    <p className={`content ${theme}`}>
      <Linkify options={options}>
        {
          text
        }
      </Linkify>
    </p>
  )
}

export default Textcontent