import React from "react";
import Textinfo from "../atoms/fonts/TextInfo";
import Logo from "../atoms/Logo";
import { State, Theme } from "../interfaces/Theme";

interface Props {
  picto: string,
  stat: number,
  theme: Theme,
  state: State
}

const Tweetaction = ({picto, stat, state, theme}: Props) => {
  return (
    <div className="tweet_action">
      <Textinfo
        text={stat.toString()}
        theme={theme}
      />
      <Logo
        theme={theme}
        name={picto}
        state={state}
      />
    </div>
  )
} 

export default Tweetaction