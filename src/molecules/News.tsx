import React from "react";
import Subtitle from "../atoms/fonts/Subtitle";
import Textinfo from "../atoms/fonts/TextInfo";
import { Theme } from "../interfaces/Theme";

interface Props {
  theme: Theme,
  date: string,
  topic: string,
  content: string,
  trend: string
}

const News = ({theme, topic, date, content, trend}: Props) => {
  return (
    <div className="news">
      <div className="left">
        <div className="info">
          <Textinfo
            text={topic}
          />
          <p className="separator">
            <span>
              .
            </span>
          </p>
          <Textinfo
            text={date}
          />
        </div>
        <div className="content">
          <Subtitle
            text={content}
          />
        </div>
        <div className="trend">
          <Textinfo
            text={trend}
            linkify={true}
          />
        </div>
      </div>
      <div className="right">
        <div className="img">
          <img src="img/resize.jpeg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default News