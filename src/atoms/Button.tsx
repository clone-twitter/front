import React from 'react'
import Subtitle from './fonts/Subtitle'

interface Props {
  size: "big" | "medium" | "small",
  type: "primary" | "secondary"
}

const Button = ({size, type}: Props) => {
  return (
    <button className={`button ${size} ${type}`}>
      <Subtitle 
        text='Tweet'
      />
    </button>
  )
}

export default Button