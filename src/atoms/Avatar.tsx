import React from "react";

interface Props {
  img: string,
  size: 'small' | 'medium'
}

const Avatar = ({img, size}: Props) => {
  return (
    <div className={`avatar ${size}`}>
      <img src={`${process.env.PUBLIC_URL}/avatar/${img}`} alt="avatar"/>
    </div>
  )
}

export default Avatar