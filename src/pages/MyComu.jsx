import MyComunity from "../components/MyComunity"
import MyComuHeader from "../layout/MyComuHeader"
import Header from "../layout/Header"

export default function MyComu({myData, comuInfo}){

    const filterComuInfo = comuInfo.filter((comuInfor) => (
        comuInfor.userName===myData.user
    ))

    return(
        // 내 게시글
<div className='app'>
    <Header/>
      <div className='content'>
            <MyComuHeader/>
            {filterComuInfo.map((comuInfor) => (
               <MyComunity key={comuInfor.id} {...comuInfor}/> 
            ))}
        </div>
        </div>
    )
}