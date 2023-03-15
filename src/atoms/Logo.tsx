import React from "react";

interface Props {
  theme: 'DarkTheme' | 'LightTheme',
  name: string,
  state?: 'Default' | 'Selected' | 'Blue',
}

const Logo = ({theme, name, state}: Props) => {
  return (
    <span className="logo">
      {
        state ? (
          <img src={`${process.env.PUBLIC_URL}/icons/${theme}/${name}/${state}.svg`} alt={name} />
        ) : (
          <img src={`${process.env.PUBLIC_URL}/icons/${theme}/${name}.svg`} alt={name} />
        )
      }
      
    </span>
  )
}

export default Logo