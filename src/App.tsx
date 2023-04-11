import React, { useEffect, useState } from 'react';
import './style/main.scss'
import Home from './pages/Home';
import { Theme } from './interfaces/Theme';
import { Route, Routes, useMatch, useNavigate } from 'react-router-dom';
import Explore from './pages/Explore';
import Layout from './pages/Layout';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Bookmarks from './pages/Bookmarks';
import Lists from './pages/Lists';
import Profile from './pages/Profile';


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
          <Route path="/explore" element={<Explore />}/>
          <Route path="/notifications" element={<Notifications />}/>
          <Route path="/messages" element={<Messages />}/>
          <Route path="/bookmarks" element={<Bookmarks />}/>
          <Route path="/lists" element={<Lists />}/>
          <Route path="/profile" element={<Profile />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
