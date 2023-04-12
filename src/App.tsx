import React, { useState } from 'react';
import './style/main.scss'
import Home from './pages/Home';
import { Theme } from './interfaces/Theme';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Explore from './pages/Explore';
import Layout from './pages/Layout';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Bookmarks from './pages/Bookmarks';
import Lists from './pages/Lists';
import Profile from './pages/Profile';
import Error from './pages/Error';


function App() {

  const [theme, setTheme] = useState("DarkTheme" as Theme)

  const stats = {
    comments: 12,
    retweets: 153,
    likes: 898,
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      
        <Route 
          path="/" 
          element={<Layout theme={theme as Theme}/>}
          errorElement={<Error theme={theme as Theme}/>}
        >
          <Route path='/home' index element={<Home theme={theme as Theme} stats={stats}/>}/>
          <Route path="/explore" element={<Explore />}/>
          <Route path="/notifications" element={<Notifications />}/>
          <Route path="/messages" element={<Messages />}/>
          <Route path="/bookmarks" element={<Bookmarks />}/>
          <Route path="/lists" element={<Lists />}/>
          <Route path="/profile" element={<Profile />}/>
          {/* <Route path="*" element={<Error />}/> */}
        </Route>
      
    )
  );
    
  return (
    <div className={`App ${theme}`}>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
