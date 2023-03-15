import React from "react";
import Title from '../atoms/fonts/Title'
import Logo from '../atoms/Logo'

interface Props {
  theme: 'DarkTheme' | 'LightTheme',
  name: string,
  state?: 'Default' | 'Selected' | 'Blue',
  title: string
}

const MenuItem = ({theme, name, state, title}: Props) => {
  return (
    <div className="menu_item">
      
      <Logo
        theme={theme}
        name={name}
        state={state}
      />
      <Title
        title={title}
        state={state}
        theme={theme}
      />
    </div>
  )
}

export default MenuItem