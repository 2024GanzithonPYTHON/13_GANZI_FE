import React, { useEffect } from 'react';
import Main from './pages/Main';
import Chats from './pages/Chats';
import Comu from './pages/Comu';
import MyPage from './pages/MyPage';
import NewComu from './pages/NewComu';
import Search from './pages/Search';
import Profiles from './pages/Profiles';
import Reviews from './pages/Reviews';
import ReviewWrite from './pages/ReviewWrite';
import MyReview from './pages/MyReview';
import ChatPage from './pages/ChatPage';
import ComuPage from './pages/ComuPage';
import MyComu from './pages/MyComu';
import Alarm from './pages/Alarm';

import Header from './layout/Header';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useRef } from 'react';


function App() {
 
  return (
    <BrowserRouter>
    <div className='app'>
    <Header/>
      <bb className='content'>
      <Routes>
        <Route path='/Main' element={<Main />}/>
        <Route path='/Chats' element={<Chats/>}/>
        <Route path='/MyPage' element={<MyPage/>}/>
        <Route path='/MyReview' element={<MyReview/>}/>
        <Route path='/Comu' element={<Comu/>}/>

        <Route path='/NewComu' element={<NewComu/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/Profilepage/:ID' element={<Profiles/>}/>
        <Route path='/Reviewpage/:ID' element={<Reviews/>}/>
        <Route path='/ReviewWrite/:ID' element={<ReviewWrite/>}/>
        <Route path='/ChatPage/:ID' element={<ChatPage/>}/>
        <Route path='/ComuPage/:ID' element={<ComuPage/>}/>
        <Route path='/MyComu' element={<MyComu/>}/>
        <Route path='/Alarm' element={<Alarm/>}/>
      </Routes>
      </bb>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
