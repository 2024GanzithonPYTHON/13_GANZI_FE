import MyComunity from "../components/MyComunity"

export default function MyComu({myData, comuInfo}){

    const filterComuInfo = comuInfo.filter((comuInfor) => (
        comuInfor.userName===myData.user
    ))

    return(
        // 내 게시글
        <div>
            {filterComuInfo.map((comuInfor) => (
               <MyComunity key={comuInfor.id} {...comuInfor}/> 
            ))}
        </div>
    )
}