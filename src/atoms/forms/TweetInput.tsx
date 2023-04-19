import React, { useId } from "react";

interface Props {
  placeholder: string
}

const TweetInput = ({placeholder}: Props) => {
  const tweetInputId = useId()

  return (
    <>
      <textarea
        className="tweet_input"
        name="tweet" 
        id={tweetInputId}
        placeholder={placeholder}
      ></textarea>
    </>
  )
}

export default TweetInput