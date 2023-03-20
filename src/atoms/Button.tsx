import React from 'react'
import { Type } from '../interfaces/Theme'
import Subtitle from './fonts/Subtitle'

interface Props {
  size: "big" | "medium" | "small",
  type: Type,
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