import React from "react";
import Textinfo from "../atoms/fonts/TextInfo";
import { Theme } from "../interfaces/Theme";
import { Comment, Like, Retweet, Share } from "../atoms/IconTweetAction";

interface Props {
  picto: string,
  stat?: number,
  theme: Theme,
  color: string
}

const Tweetaction = ({picto, stat, theme, color}: Props) => {
  return (
    <div className={`tweet_action ${color}`}>
      {
        picto === "Comment" && 
        <Comment
          theme={theme}
        />
      }
      {
        picto === "Retweet" && 
        <Retweet
          theme={theme}
        />
      }
      {
        picto === "Like" && 
        <Like
          theme={theme}
        />
      }
      {
        picto === "Share" && 
        <Share
          theme={theme}
        />
      }
      <Textinfo
        text={stat ? stat.toString() : undefined}
        theme={theme}
      />
    </div>
  )
} 

export default Tweetaction