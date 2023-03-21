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
        <div className="main_content">
          <TopBlock
            theme={theme as unknown as Theme}
            title="Accueil"
            placeholder='Quoi de neuf ?'
            img='goku.jpeg'
            state="Default"
            type='primary'
          />
        </div>
        <div className="side_column">
          <input type="text" />
        </div>
      </main>
    </div>
  );
}

export default App;
