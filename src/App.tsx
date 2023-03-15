import React from 'react';
import './style/main.scss'
import Button from "./atoms/Button";
import MenuItem from './molecules/MenuItem'
import Avatar from './atoms/Avatar';
import Spacer from './atoms/Spacer';
import Subtitle from './atoms/fonts/Subtitle';

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

      <Spacer
        theme='DarkTheme'
      />

      <Subtitle 
        text='Home'
        theme='LightTheme'
      />
    </div>
  );
}

export default App;
