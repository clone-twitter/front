import React from 'react'
import Subtitle from './fonts/Subtitle'

interface Props {
  size: "big" | "medium" | "small",
  type: "primary" | "secondary",
  text: string
}

const Button = ({size, type, text}: Props) => {
  return (
    <button className={`button ${size} ${type}`}>
      <Subtitle 
        text={text}
      />
    </button>
  )
}

export default Button