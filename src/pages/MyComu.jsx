import MyComunity from "../components/MyComunity"
import MyComuHeader from "../layout/MyComuHeader"

export default function MyComu(){

    return(
        // 내 게시글
        <div>
            <MyComuHeader/>
            {/* {comuInfo.map((comuInfor) => (
               <MyComunity key={comuInfor.id} {...comuInfor}/> 
            ))} 연동한 데이터 comuInfo에 넣고 map으로 하나씩 출력*/}
        </div>
    )
}