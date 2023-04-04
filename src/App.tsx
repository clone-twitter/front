import React, { useState } from 'react';
import './style/main.scss'
import SideMenu from './components/SideMenu';
import { Theme } from './interfaces/Theme';
import TopBlock from './components/TopBlock';
import Spacer from './atoms/Spacer';
import Tweet from './components/Tweet';
import Profile from './molecules/Profile';
import Search from './molecules/Search';
import Card from './molecules/Card';


function App() {
  const [theme, SetTheme] = useState("DarkTheme")
  const stats = {
    comments: 12,
    retweets: 153,
    likes: 898,
  }
    
  return (
    <div className={`App ${theme}`}>
      <div className="container">
        <SideMenu
          theme={theme as unknown as Theme}
          img="goku.jpeg"
          name="My Name"
          id="ItsMyId"
        />
        <main>
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
            
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
