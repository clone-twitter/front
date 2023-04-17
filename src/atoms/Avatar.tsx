import React from "react";

interface Props {
  img_url: string,
  size: 'small' | 'medium'
}

const Avatar = ({img_url, size}: Props) => {
  return (
    <div className={`avatar ${size}`}>
      <img src={`http://localhost:1337${img_url}`} alt="avatar"/>
    </div>
  )
}

export default Avatar