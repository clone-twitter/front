import React from "react";

interface Props {
  theme: 'LightTheme' | 'DarkTheme'
}

const Spacer = ({theme}: Props) => {
  return (
    <span className={`spacer ${theme}`}></span>
  )
}

export default Spacer