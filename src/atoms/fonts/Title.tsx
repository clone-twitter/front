import React from "react";
import { State } from "../../interfaces/Theme";
import useTheme from "../../hooks/theme";

interface Props {
  title: string,
  state?: State
}

const Title = ({title, state}: Props) => {

  const theme = useTheme()

  return (
    <h2 className={`${state} ${theme}`}>
      {title}
    </h2>
  )
}

export default Title