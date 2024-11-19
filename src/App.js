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





import Header from './layout/Header';
import Footer from './layout/Footer';


import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useRef } from 'react';



/* 회원데이터 */
const PersonalDatas=[{
  id:0,
  user: "닉네임1",
  content: "aelllo",
  wKeyword: "foreign",
  gKeyword: "IT",
  add: "Backend",
  gender: "여성",
  preferGender: "여성",
  time: 1,
  reviews: 2,
  stars: 4,
  img: "/female.png",
},
{
  id:1,
  user: "닉네임2",
  content: "bello",
  wKeyword: "design",
  gKeyword: "IT",
  add: "backend",
  gender: "남성",
  preferGender: "상관없어요",
  time: 2,
  reviews: 2,
  stars: 3,
  img: "/man.png",
},
{
  id:2,
  user: "닉네임3",
  content: "cello",
  wKeyword: "IT",
  gKeyword: "foreign",
  add: "English",
  gender: "여성",
  preferGender: "상관없어요",
  time: 3,
  reviews: 6,
  stars: 5,
  img: "/female.png",
},
{
  id:3,
  user: "닉네임4",
  content: "dello",
  wKeyword: "IT",
  gKeyword: "design",
  add: "UI/UX",
  gender: "남성",
  preferGender: "여성",
  time: 4,
  reviews: 5,
  stars: 4,
  img: "/man.png",
},
{
  id:4,
  user: "닉네임5",
  content: "eello",
  wKeyword: "foreign",
  gKeyword: "IT",
  add: "frontend",
  gender: "여성",
  preferGender: "상관없어요",
  time: 5,
  reviews: 4,
  stars: 2,
  img: "/female.png",
},
{
  id:5,
  user: "닉네임6",
  content: "fello",
  wKeyword: "IT",
  gKeyword: "foreign",
  add: "Japan",
  gender: "여성",
  preferGender: "여성",
  time: 6,
  reviews: 7,
  stars: 1,
  img: "/female.png",
},
{
  id:6,
  user: "닉네임7",
  content: "gello",
  wKeyword: "IT",
  gKeyword: "foreign",
  add: "china",
  gender: "남성",
  preferGender: "남성",
  time: 7,
  reviews: 9,
  stars: 5,
  img: "/man.png",
},
{
  id:7,
  user: "닉네임8",
  content: "hello",
  wKeyword: "IT",
  gKeyword: "design",
  add: "UX",
  gender: "남성",
  preferGender: "여성",
  time: 8,
  reviews: 2,
  stars: 4,
  img: "/man.png",
},
{
  id:8,
  user: "닉네임9",
  content: "iello",
  wKeyword: "IT",
  gKeyword: "design",
  add: "UI",
  gender: "남성",
  preferGender: "상관없어요",
  time: 9,
  reviews: 5,
  stars: 3,
  img: "/man.png",
},
{
  id:9,
  user: "닉네임10",
  content: "Jello",
  wKeyword: "IT",
  gKeyword: "design",
  add: "UX",
  gender: "여성",
  preferGender: "남성",
  time: 10,
  reviews: 4,
  stars: 4,
  img: "/female.png",
},
{
  id:10,
  user: "닉네임11",
  content: "Kello",
  wKeyword: "IT",
  gKeyword: "design",
  add: "UI",
  gender: "여성",
  preferGender: "남성",
  time: 11,
  reviews: 6,
  stars: 3,
  img: "/female.png",
},
]


function App() {

  const [ Datas, setDatas ] = useState(PersonalDatas);
  const [ myData, setMyData ] = useState(PersonalDatas[1])



/* 리뷰데이터 */
const mockReviewData = [{
  id: 0,
  reviewId: 0,
  userName: Datas[1].user, 
  keyword: Datas[1].gKeyword, 
  time: new Date().getTime(), 
  review: "후기1dkssudg tjslr ajsdlfa jskdfwkejrl amsr ksdjfalsrpasl tanskdjw rjsans dfnl wrkht vlwlsWKja dnrlcksjgdjklsjaljdklfjq wlkdfj glakdj flsosdlfjdlmf sdksdhkatdmfausdfrnw",
  img:"/man.png",
},
{
  id: 1,
  reviewId: 0,
  userName: Datas[1].user, 
  keyword: Datas[1].gKeyword, 
  time: new Date().getTime(), 
  review: "후기2",
  img:"/man.png",
},
{
  id: 2,
  reviewId: 2,
  userName: Datas[4].user, 
  keyword: Datas[4].gKeyword, 
  time: new Date().getTime(), 
  review: "후기3",
  img:"/female.png",
},
{
  id: 3,
  reviewId: 1,
  userName: Datas[3].user, 
  keyword: Datas[3].gKeyword, 
  time: new Date().getTime(), 
  review: "후기4",
  img:"/man.png",
},
]

/* 커뮤니티 데이터 */
const mockComuData=[{
  id:0,
  userName: Datas[1].user,
  userKeyword: Datas[1].gKeyword,
  userAdd: Datas[1].add,
  title: "안녕하세요",
  content: "반갑습니다. 하이하이",
  time: 3,
  view: 3,
  img:"/man.png",
},
{
  id:1,
  userName: Datas[5].user,
  userKeyword: Datas[5].gKeyword,
  userAdd: Datas[5].add,
  title: "안녕하세요1",
  content: "반갑습니다. 하이하이1",
  time: 6,
  view: 10,
  img:"/female.png",
},
{
  id:3,
  userName: Datas[7].user,
  userKeyword: Datas[7].gKeyword,
  userAdd: Datas[7].add,
  title: "안녕하세요2",
  content: "반갑습니다. 하이하이2",
  time: 2,
  view: 5,
  img:"/man.png",
},
]

const [ comuInfo, setComuInfo ] = useState(mockComuData)



/*댓글 데이터 */
const mockCommentData=[{
  id:0,
  ComuPage: 0,
  content:"댓글1",
  userName: Datas[7].user,
  userKeyword: Datas[7].gKeyword,
  userAdd: Datas[7].add,
  time: 4,
  img:"/man.png",
},
{
  id:1,
  ComuPage: 0,
  content:"댓글2",
  userName: Datas[2].user,
  userKeyword: Datas[2].gKeyword,
  userAdd: Datas[2].add,
  time: 10,
  img: "/female.png",
},
{
  id:2,
  ComuPage: 1,
  content:"댓글3",
  userName: Datas[3].user,
  userKeyword: Datas[3].gKeyword,
  userAdd: Datas[3].add,
  time: 6,
  img:"/man.png",
},
{
  id:3,
  ComuPage: 3,
  content:"댓글4",
  userName: Datas[10].user,
  userKeyword: Datas[10].gKeyword,
  userAdd: Datas[10].add,
  time: 7,
  img:"/man.png",
},
{
  id:4,
  ComuPage: 2,
  content:"댓글5",
  userName: Datas[6].user,
  userKeyword: Datas[6].gKeyword,
  userAdd: Datas[6].add,
  time: 7,
  img:"/man.png",
},
]

const [ commentInfo, setCommentInfo ] = useState(mockCommentData)



/* 채팅데이터 */
const mockChatData = [{
  chatId: 2,
  sentid: 1,
  text:"안녕하세요" 
},
{
  chatId: 2,
  sentid: 2,
  text: "네 안녕하세요"

},
{
  chatId: 2,
  sentid:2,
  text: "이름이 어떻게 되시나요?"
},
{
  chatId: 4,
  sentid:4,
  text: "누구세요?"
},
{
  chatId: 4,
  sentid:1,
  text:"뚱인데요"
}
]
   
const [ chatInfo, setChatInfo ] = useState(mockChatData);
   



  const [reviewInfo, setReviewInfo] = useState(mockReviewData)

  const idRef=useRef(4)


//안봐도 돼
  const reviewCreate = (reviewText, ID) =>{
      const newReviewInfo={
        id: idRef.current++,
        reviewId: ID,
        userName: Datas[1].user, 
        keyword: Datas[1].gKeyword, 
        time: new Date().getTime(), 
        review: reviewText
      }
      setReviewInfo(
          [...reviewInfo, newReviewInfo]
      )
  }
 

  return (
    <BrowserRouter>
    <div className='app'>
    <Header/>
      <bb className='content'>
      <Routes>
        <Route path='/Main' element={<Main datas={Datas} />}/>
        <Route path='/Chats' element={<Chats chatInfo={chatInfo}/>}/>
        <Route path='/MyPage' element={<MyPage myData={myData}/>}/>
        <Route path='/MyReview' element={<MyReview myData={myData} reviewInfo={reviewInfo}/>}/>
        <Route path='/Comu' element={<Comu datas={Datas} comuInfo={comuInfo}/>}/>

        <Route path='/NewComu' element={<NewComu datas={Datas} myData={myData}/>}/>
        <Route path='/Search' element={<Search datas={Datas}/>}/>
        <Route path='/Profilepage/:ID' element={<Profiles datas={Datas}/>}/>
        <Route path='/Reviewpage/:ID' element={<Reviews datas={Datas} reviewInfo={reviewInfo}/>}/>
        <Route path='/ReviewWrite/:ID' element={<ReviewWrite datas={Datas} reviewCreate={reviewCreate}/>}/>
        <Route path='/ChatPage/:ID' element={<ChatPage datas={Datas} myData={myData} chatInfo={chatInfo}/>}/>
        <Route path='/ComuPage/:ID' element={<ComuPage comuInfo={comuInfo} commentInfo={commentInfo}/>}/>
        <Route path='/MyComu' element={<MyComu myData ={myData} comuInfo ={comuInfo}/>}/>
      </Routes>
      </bb>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
