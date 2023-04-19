import React from "react";
import "linkify-plugin-mention";
import Linkify from "linkify-react"
import "linkify-plugin-hashtag";
import useTheme from "../../hooks/theme";


interface Props {
  text: string
}

const Textcontent = ({text}: Props) => {

  const theme = useTheme()

  const options = {
    formatHref: {
      mention: (href: string) => href,
      hashtag: (href: string) => `/hashtag/${href.slice(1)}`
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