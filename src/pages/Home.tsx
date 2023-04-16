import React, { useEffect, useState } from "react";
import TopBlock from "../components/TopBlock";
import Spacer from "../atoms/Spacer";
import { Theme } from "../interfaces/Theme";
import Tweet from "../components/Tweet";
import { ITweet } from "../interfaces/Tweet";
import Search from "../molecules/Search";
import Card from "../molecules/Card";
import News from "../molecules/News";
import Profile from "../molecules/Profile";
import Textinfo from "../atoms/fonts/TextInfo";
import { TweetsService } from "../services/tweetsService";

interface Props {
  theme: Theme,
}

const Home = ({theme}: Props) => {

  const tweet = new TweetsService()

  const [tweets, setTweets] = useState<ITweet>()

  useEffect(() => {
    const tweets = async () => {
      const response = await tweet.getTweets()
      return response
    }

    tweets().then((response) => {
      setTweets(response)
    })
  }, [])
  
  return (
    <div className="home">
      <div className="main_content">
        <TopBlock
          theme={theme as unknown as Theme}
          title="Accueil"
          placeholder='Quoi de neuf ?'
          img='goku.jpeg'
          state="Default"
          type='primary'
        />
        <Spacer
          theme={theme as unknown as Theme}
        />
        {tweets?.data && tweets.data.map((tweet: any) => {
          return (
            <Tweet
              text={tweet.attributes.text_content}
              total_comments={tweet.attributes.total_comments}
              total_likes={tweet.attributes.total_likes}
              total_retweets={tweet.attributes.total_retweets}
              name={tweet.attributes.users_permissions_user.data.attributes.tweet_name}
              id={`@${tweet.attributes.users_permissions_user.data.attributes.username}`}
              key={tweet.id}
              created={tweet.attributes.created_at}
              avatar={tweet.attributes.users_permissions_user.data.attributes.avatar.data.attributes.url}
              theme={theme as unknown as Theme}
            />
          )
        })}
      </div>
      <div className="side_column">
        <Search 
          placeholder='Recherche Twitter'
          theme={theme as Theme}
        />
        <Card
          text='Tendances pour vous'
          theme={theme as Theme}
          link="/trends"
        >
          <News
            theme={theme as Theme}
            date="Hier"
            topic="Inflation"
            content="L'Europe en hausse prudente avant un indicateur d'inflation en zone euro."
            trend='Populaire dans #Ukraine'
          />
          <News
            theme={theme as Theme}
            date="Hier"
            topic="Inflation"
            content="L'Europe en hausse prudente avant un indicateur d'inflation en zone euro."
            trend='Populaire dans #Ukraine'
          />
          <News
            theme={theme as Theme}
            date="Hier"
            topic="Inflation"
            content="L'Europe en hausse prudente avant un indicateur d'inflation en zone euro."
            trend='Populaire dans #Ukraine'
          />
        </Card>
        <Card
          text="Qui suivre ?"
          theme={theme as Theme}
          link="/news"
        >
          <Profile 
            img='goku.jpeg'
            theme='DarkTheme'
            name="This is my name"
            id="myTwitterId"
            isButtonActive={true}
          />
          <Profile 
            img='goku.jpeg'
            theme='DarkTheme'
            name="This is my name"
            id="myTwitterId"
            isButtonActive={true}
          />
        </Card>
        <Textinfo
          text="Terms of Service Privacy Policy Cookie Policy Ads info More © 2021 Twitter, Inc."
          theme={theme as Theme}
          linkify={false}
        />
      </div>
    </div>
  )
}

export default Home