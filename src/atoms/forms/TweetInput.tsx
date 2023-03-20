import React, { useId } from "react";

interface Props {
  placeholder: string
}

const TweetInput = ({placeholder}: Props) => {
  const tweetInputId = useId()

  return (
    <>
      <textarea
        className="tweetInput"
        name="tweet" 
        id={tweetInputId}
        placeholder={placeholder}
      ></textarea>
    </>
  )
}

export default TweetInput