import React from "react";
import TopBlock from "../components/TopBlock";
import Spacer from "../atoms/Spacer";
import { Theme } from "../interfaces/Theme";
import Tweet from "../components/Tweet";
import { Stats } from "../interfaces/Tweet";
import Search from "../molecules/Search";
import Card from "../molecules/Card";
import News from "../molecules/News";
import Profile from "../molecules/Profile";
import Textinfo from "../atoms/fonts/TextInfo";

interface Props {
  theme: Theme,
  stats: Stats
}

const Home = ({theme, stats}: Props) => {
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
        <Tweet 
          text='GPT-4 is now available to everyone with a crypto wallet.
          Try GPT-4 today: https://beacons.ai/openai.gpt4
          (A surprise $GPT coin may be airdropped to users...) (@SinouuuJ) #OpenAI'
          stats={stats}
          name="This is my Name"
          id="@MyTwitterId"
          created={new Date}
          avatar="goku.jpeg"
          theme={theme as unknown as Theme}
        />
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