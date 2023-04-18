import React from "react";
import useTheme from "../../hooks/theme";
import Textinfo from "../../atoms/fonts/TextInfo";
import Subtitle from "../../atoms/fonts/Subtitle";

interface Props {
  props : {
    info: string,
    title: string,
    trend: string,
  }
}

const TrendItem = ({props}: Props) => {
  
  const theme = useTheme()
  
  return (
    <div className={`trend_item ${theme}`}>
      <div className="trend_item_content">
        <div className="trend_item_info">
          <Textinfo
            text={props.info}
          />
        </div>
        <div className="trend_item_title">
          <Subtitle
            text={props.title}
          />
        </div>
        <div className="trend_item_trend">
          <Textinfo
            text={props.trend}
          />
        </div>
      </div>
    </div>
  )
}

export default TrendItem