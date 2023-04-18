import Linkify from "linkify-react";
import React from "react";
import { Theme } from "../../interfaces/Theme";
import "linkify-plugin-hashtag"
import useTheme from "../../hooks/theme";

interface Props {
  text?: string | 0,
  linkify?: boolean
}

const Textinfo = ({text, linkify}: Props) => {

  const options = {
    formatHref: {
      hashtag: (href: string) => `/hashtag/${href.slice(1)}`
    }
  }

  const theme = useTheme()

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