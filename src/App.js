import React from 'react';
import './App.css';
import Header from './Header';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Card from './Card';
// import Chat from './Chat';
import Chats from './Chats';
import Chatscreen from './Chatscreen';
import Profile from './Profile';

function App() {
  return (
  <BrowserRouter>
    <div className="app">
      <Routes>
        <Route 
         path='/' 
         element={<><Header/><Card/></>}
        />

        <Route
         path='/chat'
         element={
         <>
         <Header backButton='/'/>
         <Chats/>
         </>
         }
        />

        <Route
         path='/chat/:dog'
         element={
         <>
         <Header backButton='/chat'/>
         <Chatscreen/>
         </>
         }
        />

        <Route
          path='/profile'
          element={
            <>
              <Header backButton='/'/>
              <Profile/>
            </>
          }
        />
      </Routes>

    </div>
  </BrowserRouter>  
  );
}

export default App;
