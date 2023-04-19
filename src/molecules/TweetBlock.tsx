import React from "react";
import Avatar from "../atoms/Avatar";
import Button from "../atoms/Button";
import TweetInput from "../atoms/forms/TweetInput";
import Logo from "../atoms/Logo";
import { State, Theme, Type } from "../interfaces/Theme";

interface Props {
  img: string,
  theme: Theme,
  type: string,
  state: State,
  placeholder: string
}

const names = [
  'Media', 'GIF', 'Poll', 'Emoji', 'Schedule'
]

const TweetBlock = ({img, theme, type, state, placeholder}: Props) => {
  return (
    <div className="tweet_block">
      <div className="left">
        <Avatar
          img_url={img}
          size="medium"
        />
      </div>
      <div className="right">
        <div>
          <TweetInput
            placeholder={placeholder}
          />
        </div>
        <footer>
          <div className="options">
            {
              names.map( name => {
                return (
                  <Logo
                    name={name}
                    state={state}
                    key={name}
                  />
                )
              })
            }
          </div>
          <Button
            size="medium"
            type={type as Type}
            text="Tweeter"
          />
        </footer>
      </div>
    </div>
  )
}

export default TweetBlock