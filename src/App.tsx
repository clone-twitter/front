import React, { useState } from 'react';
import './style/main.scss'
import SideMenu from './components/SideMenu';
import { Theme } from './interfaces/Theme';


function App() {
  const [theme, SetTheme] = useState("DarkTheme")
    
  return (
    <div className={`App ${theme}`}>
      <SideMenu
        theme={theme as unknown as Theme}
        img="goku.jpeg"
        name="My Name"
        id="@ItsMyId"
      />
      <main>

      </main>
    </div>
  );
}

export default App;
