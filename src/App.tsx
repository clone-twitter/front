import React from 'react';
import './style/main.scss'
import Button from "./atoms/Button";
import MenuItem from './molecules/MenuItem'

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
    </div>
  );
}

export default App;
