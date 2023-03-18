import React from "react";
import { Theme } from "../interfaces/Theme";
import Header from "../molecules/Header";

interface Props {
  title: string,
  theme: Theme
}

const TopBlock = ({title, theme}: Props) => {
  return (
    <>
      <Header
        title={title}
        theme={theme}
      />
    </>
  )
}

export default TopBlock