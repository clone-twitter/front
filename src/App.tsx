import React, { useEffect, useState } from 'react';
import './style/main.scss'
import Home from './pages/Home';
import { Theme } from './interfaces/Theme';
import { Route, Routes, useMatch, useNavigate } from 'react-router-dom';
import Explorer from './pages/Explorer';
import Layout from './pages/Layout';


function App() {
  const [theme, SetTheme] = useState("DarkTheme");
  const stats = {
    comments: 12,
    retweets: 153,
    likes: 898,
  }

  const match = useMatch("/")
  const navigate = useNavigate()

  useEffect(() => {
    match?.pathname === "/" && navigate("/home")
  }, [match, navigate])
    
  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route 
          path="/" 
          element={<Layout theme={theme as Theme}/>}
        >
          <Route path='/home' index element={<Home theme={theme as Theme} stats={stats}/>}/>
          <Route path="/explore" element={<Explorer />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
