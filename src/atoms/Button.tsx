import React from 'react'

interface Props {
  size: "big" | "medium" | "small",
  type: "primary" | "secondary"
}

const Button = ({size, type}: Props) => {
  return (
    <button className={`button ${size} ${type}`}>
      Tweet
    </button>
  )
}

export default Button