import React, { useState } from 'react';
import './style/main.scss'
import SideMenu from './components/SideMenu';
import { Theme } from './interfaces/Theme';
import TopBlock from './components/TopBlock';


function App() {
  const [theme, SetTheme] = useState("DarkTheme")
    
  return (
    <div className={`App ${theme}`}>
      <SideMenu
        theme={theme as unknown as Theme}
        img="goku.jpeg"
        name="My Name"
        id="ItsMyId"
      />
      <main>
        <TopBlock
          theme={theme as unknown as Theme}
          title="Accueil"
          placeholder='Quoi de neuf ?'
          img='goku.jpeg'
          state="Default"
          type='primary'
        />
      </main>
    </div>
  );
}

export default App;
