import React from "react";
import Title from "../atoms/fonts/Title";
import Textinfo from "../atoms/fonts/TextInfo";
import { Theme } from "../interfaces/Theme";

interface Props {
  title: string,
  info: string
}

const TitleInfo = ({title, info}: Props) => {
  return (
    <div className={`subtitle_info`}>
      <Title
        title={title}
      />
      <Textinfo
        text={info}
      />
    </div>
  )
}

export default TitleInfo