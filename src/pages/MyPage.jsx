import Introduce from "../components/Introduce"

export default function MyPage({ 
    Datas, 
    myWData, 
    setMyWData, 
    onUpdate
    }) {
        
        return(
            <>
            <Introduce i={Datas[1]}/>
            <hr />
            <div>
             
                <p>내가 쓴 게시물</p>
               
            </div>
            <hr />
            <div>
                <p>재능 소개</p>
            </div>
            <hr />
            <div>
                <p>한줄 소개</p>
                <p>{Datas[1].content}</p>
            </div>
            <hr />
            <div>
                <p>제가 자신있는 부분은요!</p>
            </div>
            </>
            
        )
}