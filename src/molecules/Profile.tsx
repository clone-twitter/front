import React from "react";
import Avatar from "../atoms/Avatar";
import Subtitle from "../atoms/fonts/Subtitle";
import Textinfo from "../atoms/fonts/TextInfo";
import Logo from "../atoms/Logo";
import { Theme } from "../interfaces/Theme";

interface Props {
  theme: Theme,
  img: string,
  name: string,
  id: string
}

const Profile = ({img, theme, name, id}: Props) => {
  return (
    <div className="profile_wrap">
      <div className="wrapper">
        <Avatar
          size="small"
          img={img}
        />
        <div className="name_wrap">
          <Subtitle
            text={name}
            theme={theme}
          />
          <Textinfo
            text={id}
            theme={theme}
          />
        </div>
      </div>
      <Logo 
        theme={theme}
        name="More"
        state="Default"
      />
    </div>
    
  )
}

export default Profile