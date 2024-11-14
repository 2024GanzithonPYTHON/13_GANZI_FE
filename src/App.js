import React, { useEffect } from 'react';
import Main from './pages/Main';
import Comu from './pages/Comu';
import MyPage from './pages/MyPage';
import NewComu from './pages/NewComu';
import Search from './pages/Search';
import Profiles from './pages/Profiles';
import Reviews from './pages/Reviews';


import Header from './layout/Header';
import Footer from './layout/Footer';


import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';




const PersonalDatas=[{
  id:0,
  user: "닉네임1",
  content: "aelllo",
  wKeyword: "foreign",
  gKeyword: "IT",
  add: "Backend",
},
{
  id:1,
  user: "닉네임2",
  content: "bello",
  wKeyword: "design",
  gKeyword: "IT",
  add: "backend",
},
{
  id:2,
  user: "닉네임3",
  content: "cello",
  wKeyword: "IT",
  gKeyword: "foreign",
  add: "English",
},
{
  id:3,
  user: "닉네임4",
  content: "dello",
  wKeyword: "IT",
  gKeyword: "design",
  add: "UI/UX",
},
{
  id:4,
  user: "닉네임5",
  content: "eello",
  wKeyword: "foreign",
  gKeyword: "IT",
  add: "frontend",
},
{
  id:5,
  user: "닉네임6",
  content: "fello",
  wKeyword: "IT",
  gKeyword: "foreign",
  add: "Japan",
},
{
  id:6,
  user: "닉네임7",
  content: "gello",
  wKeyword: "IT",
  gKeyword: "foreign",
  add: "china",
},
{
  id:7,
  user: "닉네임8",
  content: "hello",
  wKeyword: "IT",
  gKeyword: "design",
  add: "UX",
},
{
  id:8,
  user: "닉네임9",
  content: "iello",
  wKeyword: "IT",
  gKeyword: "design",
  add: "UI",
},
{
  id:9,
  user: "닉네임10",
  content: "Jello",
  wKeyword: "IT",
  gKeyword: "design",
  add: "UX",
},
{
  id:10,
  user: "닉네임11",
  content: "Kello",
  wKeyword: "IT",
  gKeyword: "design",
  add: "UI",
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
        <Route path='/' element={<Main datas={Datas} />}/>
        <Route path='/MyPage' element={<MyPage Datas={Datas} myWData={myWdata} setMyWData={setMyWData} onUpdate={onUpdate}/>}/>
        <Route path='/Comu' element={<Comu datas={Datas}/>}/>
        <Route path='/NewComu' element={<NewComu datas={Datas}/>}/>
        <Route path='/Search' element={<Search datas={Datas} myWData={myWdata} myGData={myGdata}/>}/>
        <Route path='/Profilepage/:ID' element={<Profiles datas={Datas}/>}/>
        <Route path='/Reviewpage/:ID' element={<Reviews datas={Datas}/>}/>
      </Routes>
      </bb>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
