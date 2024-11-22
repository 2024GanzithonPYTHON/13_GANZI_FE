import React, { useEffect } from 'react';
import Main from './pages/Main';
import Comu from './pages/Comu';
import MyPage from './pages/MyPage';
import NewComu from './pages/NewComu';
import Search from './pages/Search';
import Profiles from './pages/Profiles';


import Header from './layout/Header';
import Footer from './layout/Footer';
import ChatComponent from "./pages/chat/ChatComponent";


import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';




const PersonalDatas=[{
  id:0,
  user: "a",
  content: "aelllo",
  wKeyword: "foreign",
  gKeyword: "IT",
  add: "backend",
},
{
  id:1,
  user: "b",
  content: "bello",
  wKeyword: "design",
  gKeyword: "IT",
  add: "backend",
},
{
  id:2,
  user: "c",
  content: "cello",
  wKeyword: "IT",
  gKeyword: "foreign",
  add: "",
},
{
  id:3,
  user: "d",
  content: "dello",
  wKeyword: "IT",
  gKeyword: "design",
  add: "",
},
{
  id:4,
  user: "e",
  content: "eello",
  wKeyword: "foreign",
  gKeyword: "IT",
  add: "frontend",
},
{
  id:5,
  user: "f",
  content: "fello",
  wKeyword: "IT",
  gKeyword: "foreign",
  add: "",
},
{
  id:6,
  user: "g",
  content: "gello",
  wKeyword: "IT",
  gKeyword: "foreign",
  add: "",
},
{
  id:7,
  user: "h",
  content: "hello",
  wKeyword: "IT",
  gKeyword: "design",
  add: "",
},
{
  id:8,
  user: "i",
  content: "iello",
  wKeyword: "IT",
  gKeyword: "design",
  add: "",
},
{
  id:9,
  user: "j",
  content: "Jello",
  wKeyword: "IT",
  gKeyword: "design",
  add: "",
},
{
  id:10,
  user: "k",
  content: "Kello",
  wKeyword: "IT",
  gKeyword: "design",
  add: "",
},
]



function App() {

  const [ Datas, setDatas ] = useState(PersonalDatas);
  const myData=PersonalDatas[1];
  const [ myWdata, setMyWData ] = useState(PersonalDatas[1].wKeyword);
  const [ myGdata, setMyGData ] = useState(PersonalDatas[1].gKeyword);

  const onUpdate=(targetId)=>{
    setDatas(
      Datas.map((Data) =>
        Data.id === targetId? 
          {...Data, wKeyword: myWdata}
          : Data
      )
    );
  };

  return (
    <BrowserRouter>
    <div className='app'>
    <Header/>
      <bb className='content'>
      <Routes>
        <Route path='/' element={<Main datas={Datas} myWData={myWdata} myGData={myGdata}/>}/>
        <Route path='/MyPage' element={<MyPage Datas={Datas} myWData={myWdata} setMyWData={setMyWData} onUpdate={onUpdate}/>}/>
        <Route path='/Comu' element={<Comu datas={Datas}/>}/>
        <Route path='/NewComu' element={<NewComu datas={Datas}/>}/>
        <Route path='/Search' element={<Search datas={Datas} myWData={myWdata} myGData={myGdata}/>}/>
        <Route path='/Profilepage/:ID' element={<Profiles datas={Datas}/>}/>
        <Route path='/ChatComponent' element={<ChatComponent/>}/>
      </Routes>
      </bb>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
