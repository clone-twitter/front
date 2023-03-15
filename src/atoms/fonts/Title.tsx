import React from "react";

interface Props {
  title: string,
  theme: 'LightTheme' | 'DarkTheme',
  state?: 'Default' | 'Blue' | 'Selected'
}

const Title = ({title, theme, state}: Props) => {
  return (
    <h2 className={`${state} ${theme}`}>
      {title}
    </h2>
  )
}

export default Title