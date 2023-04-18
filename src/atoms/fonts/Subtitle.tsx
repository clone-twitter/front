import React from "react";
import useTheme from "../../hooks/theme";

interface Props {
  text: string,
}

const Subtitle = ({text}: Props) => {

  const theme = useTheme()

  return (
    <h3 className={`${theme}`}>
      {text}
    </h3>
  )
}

export default Subtitle