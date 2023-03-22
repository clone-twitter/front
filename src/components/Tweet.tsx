import React from "react";
import Avatar from "../atoms/Avatar";
import Subtitle from "../atoms/fonts/Subtitle";
import Textinfo from "../atoms/fonts/TextInfo";
import { Theme } from "../interfaces/Theme";
import { Stats } from "../interfaces/Tweet";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import Textcontent from "../atoms/fonts/TextContent";
import Tweetaction from "../molecules/TweetAction";

dayjs.extend(relativeTime)
dayjs.extend(duration)


interface Props {
  text: string,
  stats: Stats,
  name: string,
  id: string,
  created: Date,
  img?: string,
  avatar: string,
  theme: Theme,
}

const Tweet = ({text, stats, name, id, created, img, avatar, theme}: Props) => {

  const formatDate = () => {
    dayjs().to(dayjs(created))
    return "23s"
  } 

  return (
    <div className="tweet">
      <header>
        <Avatar
          img={avatar}
          size="medium"
        />
      </header>
      <main>
        <header>
          <Subtitle
            text={name}
            theme={theme}
          />
          <Textinfo
            text={id}
            theme={theme}
          />
          <p>•</p>
          <Textinfo
            text={formatDate()}
            theme={theme}
          />
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
            stat={stats.comments}
            picto="Comment"
            theme={theme}
            state="Default"
          />
          <Tweetaction
            stat={stats.retweets}
            picto="Retweet"
            theme={theme}
            state="Default"
          />
          <Tweetaction
            stat={stats.likes}
            picto="Like"
            theme={theme}
            state="Default"
          />
          <Tweetaction
            stat={stats.shares}
            picto="Share"
            theme={theme}
            state="Default"
          />
        </footer>
      </main>
    </div>
  )
}

export default Tweet