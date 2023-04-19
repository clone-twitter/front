import React from "react";
import Avatar from "../atoms/Avatar";
import Button from "../atoms/Button";
import Subtitle from "../atoms/fonts/Subtitle";
import Textinfo from "../atoms/fonts/TextInfo";
import Logo from "../atoms/Logo";
import { Theme } from "../interfaces/Theme";
import { IUser } from "../interfaces/User";

interface Props {
  theme: Theme,
  user?: IUser
  isButtonActive?: boolean
}

const Profile = ({theme, user, isButtonActive}: Props) => {
  return (
    <div className="profile_wrap">
      <div className="wrapper">
        <Avatar
          size="small"
          img_url={user?.avatar?.url!}
        />
        <div className="name_wrap">
          <Subtitle
            text={user?.tweet_name!}
          />
          <Textinfo
            text={`@${user?.username}`}
          />
        </div>
      </div>
      {
        isButtonActive ? (
          <Button
            size="small"
            type="secondary"
            text="Suivre"
          />
        ) : (
          <Logo
            name="More"
            state="Default"
          />
        )
      }
    </div>
    
  )
}

export default Profile