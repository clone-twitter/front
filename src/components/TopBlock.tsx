import React from "react";
import { State, Theme } from "../interfaces/Theme";
import Header from "../molecules/Header";
import TweetBlock from "../molecules/TweetBlock";

interface Props {
  title: string,
  theme: Theme,
  placeholder: string,
  img: string,
  state: State,
  type: string
}

const TopBlock = ({title, theme, img, state, type, placeholder}: Props) => {
  return (
    <>
      <Header
        title={title}
        theme={theme}
      />
      <TweetBlock
        img={img}
        state={state}
        type={type}
        theme={theme}
        placeholder={placeholder}
      />
    </>
  )
}

export default TopBlock