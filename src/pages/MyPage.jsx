import { useEffect } from "react";

export default function MyPage({ 
    Datas, 
    myWData, 
    setMyWData, 
    onUpdate
    }) {


    useEffect(()=>{
        onUpdate(Datas[1].id);
        console.log(myWData)
        console.log(Datas[1])
      },[myWData]);


   
    return(
        <>
            <div>마이페이지</div>
            <p>{Datas[1].user}</p>
            <p>{Datas[1].content}</p>
            <p>{myWData}</p>
            <p>{Datas[1].gKeyword}</p>
        </>
    )
}