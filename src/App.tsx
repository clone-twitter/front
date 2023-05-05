import React, { useState } from 'react';
import './style/main.scss'
import Home from './pages/Home';
import { Theme } from './interfaces/Theme';
import { Route, Routes, useLocation } from 'react-router-dom';
import Explore from './pages/Explore';
import Layout from './pages/Layout';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Bookmarks from './pages/Bookmarks';
import Lists from './pages/Lists';
import Profile from './pages/Profile';
import Error from './pages/Error';
import AuthProvider, { RequireAuth } from './contexts/AuthContext';
import ThemeProvider from './contexts/ThemeContext';
import LoginModal from './components/LoginModal';


function App() {

  const [theme, setTheme] = useState("DarkTheme" as Theme)
  let location = useLocation()
  let state = location.state as {backgroundLocation: Location}
    
  return (
    <div className={`App ${theme}`}>
      <AuthProvider>
        <ThemeProvider>
          <Routes location={state?.backgroundLocation || location}>
            <Route 
              path="/" 
              element={<Layout theme={theme as Theme}/>}
              errorElement={<Error theme={theme as Theme}/>}
            >
              <Route path='/home' index element={
                <RequireAuth>
                  <Home theme={theme as Theme}/>
                </RequireAuth>
              }/>
              <Route path="/explore" element={<Explore />}/>
              <Route path="/notifications" element={<Notifications />}/>
              <Route path="/messages" element={<Messages />}/>
              <Route path="/bookmarks" element={<Bookmarks />}/>
              <Route path="/lists" element={<Lists />}/>
              <Route path="/profile" element={<Profile />}/>
            </Route>
          </Routes>
          {
            state?.backgroundLocation &&
            <Routes>
              <Route path="/login" element={<LoginModal />}/>
            </Routes>
          }
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
