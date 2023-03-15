import React, { useState } from 'react';
import './style/main.scss'
import Button from "./atoms/Button";
import MenuItem from './molecules/MenuItem'
import Avatar from './atoms/Avatar';
import Spacer from './atoms/Spacer';
import Subtitle from './atoms/fonts/Subtitle';
import Textinfo from './atoms/fonts/TextInfo';
import SubtitleInfo from './molecules/TitleInfo';
import Textcontent from './atoms/fonts/TextContent';
import SideMenu from './components/SideMenu';
import { Theme } from './interfaces/Theme';


function App() {
  const [theme, SetTheme] = useState("DarkTheme")
    
  return (
    <div className={`App ${theme}`}>
      <SideMenu
        theme={theme as unknown as Theme}
      />
      <main>

      </main>
    </div>
  );
}

export default App;
