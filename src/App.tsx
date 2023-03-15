import React from 'react';
import './style/main.scss'
import Button from "./atoms/Button";
import MenuItem from './molecules/MenuItem'
import Avatar from './atoms/Avatar';

function App() {
  return (
    <div className="App">
      <Button
        size="big"
        type='primary'
      />

      <MenuItem
        theme='DarkTheme'
        name='Home'
        state="Blue"
        title="Home"
      />

      <MenuItem
        theme='LightTheme'
        name='Bookmarks'
        title="Bookmarks"
        state="Default"
      />

      <Avatar 
        img='goku.jpeg'
        size='medium'
      />
    </div>
  );
}

export default App;
