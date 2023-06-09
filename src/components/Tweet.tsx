import React from "react";
import Avatar from "../atoms/Avatar";
import Subtitle from "../atoms/fonts/Subtitle";
import Textinfo from "../atoms/fonts/TextInfo";
import { Theme } from "../interfaces/Theme";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import Textcontent from "../atoms/fonts/TextContent";
import Tweetaction from "../molecules/TweetAction";

dayjs.extend(relativeTime)
dayjs.extend(duration)


interface Props {
  text: string,
  total_comments: number,
  total_likes: number,
  total_retweets: number,
  name: string,
  id: string,
  created: Date,
  img?: string,
  avatar: string,
  theme: Theme,
}

const Tweet = ({text, total_comments, total_likes, total_retweets, name, id, created, img, avatar, theme}: Props) => {

  const formatDate = () => {
    dayjs().to(dayjs(created))
    return "23s"
  }

  return (
    <div className="tweet">
      <header>
        <Avatar
          img_url={avatar}
          size="medium"
        />
      </header>
      <main>
        <header>
          <Subtitle
            text={name}
            theme={theme}
          />
          <div className="info_wrap">
            <Textinfo
              text={id}
              theme={theme}
            />
            <p className="separator">
              <span>.</span>
            </p>
            <Textinfo
              text={formatDate()}
              theme={theme}
            />
          </div>
        </header>
        <div className="content">
          <div className="text_tweet">
            <Textcontent
              text={text}
              theme={theme}
            />
          </div>
          {
            img ? (
              <div className="img">
              </div>
            ) : ''
          }
        </div>
        <footer>
          <Tweetaction
            stat={total_comments}
            picto="Comment"
            theme={theme}
            color="blue"
          />
          <Tweetaction
            stat={total_retweets}
            picto="Retweet"
            theme={theme}
            color="green"
          />
          <Tweetaction
            stat={total_likes}
            picto="Like"
            theme={theme}
            color="red"
          />
          <Tweetaction
            picto="Share"
            theme={theme}
            color="blue"
          />
        </footer>
      </main>
    </div>
  )
}

export default Tweet