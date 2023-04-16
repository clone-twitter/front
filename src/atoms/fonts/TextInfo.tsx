import Linkify from "linkify-react";
import React from "react";
import { Theme } from "../../interfaces/Theme";
import "linkify-plugin-hashtag"

interface Props {
  text?: string | 0,
  theme: Theme,
  linkify?: boolean
}

const Textinfo = ({text, theme, linkify}: Props) => {

  const options = {
    formatHref: {
      hashtag: (href: string) => `/hashtag/${href.slice(1)}`
    }
  }

  return (
    <p className={`info ${theme}`}>
      {
        linkify ? (
          <Linkify options={options}>
            {text}
          </Linkify>
        ) : (
          text
        )
      }
    </p>
  )
}

export default Textinfo