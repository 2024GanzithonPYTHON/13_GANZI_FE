import MyComunity from "../components/MyComunity"
import MyComuHeader from "../layout/MyComuHeader"

export default function MyComu({myData, comuInfo}){

    const filterComuInfo = comuInfo.filter((comuInfor) => (
        comuInfor.userName===myData.user
    ))

    return(
        // 내 게시글
        <div>
            <MyComuHeader/>
            {filterComuInfo.map((comuInfor) => (
               <MyComunity key={comuInfor.id} {...comuInfor}/> 
            ))}
        </div>
    )
}