import React from 'react';
import './style/main.scss'
import Button from "./atoms/Button";

function App() {
  return (
    <div className="App">
      <Button
        size="big"
        type='primary'
      />
    </div>
  );
}

export default App;
