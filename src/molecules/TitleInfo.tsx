import React from "react";
import Title from "../atoms/fonts/Title";
import Textinfo from "../atoms/fonts/TextInfo";
import { Theme } from "../interfaces/Theme";

interface Props {
  theme: Theme,
  title: string,
  info: string
}

const TitleInfo = ({theme, title, info}: Props) => {
  return (
    <div className={`subtitle_info`}>
      <Title
        theme={theme}
        title={title}
      />
      <Textinfo
        text={info}
        theme={theme}
      />
    </div>
  )
}

export default TitleInfo