import ChatFooter from "../layout/ChatFooter"
import ChatHeader from "../layout/ChatHeader"
import Chating from "../components/Chating"
// 채팅 목록 수정 해야함
export default function Chats(){
    return(
        <>
        <ChatHeader/>
            
            {/* {chatInfo.map((chatInfor)=>(
                        <Chating key={chatInfor.chatId}{...chatInfor}/>
                    ))
                    }  채팅 목록 볼 수 있는 페이지라서 map 써서 연동 받은 데이터 하나씩 뿌려주시면 됩니당. key에 id 값 넣고 뒤에 {...받아온 데이터 이름}*/}
            
            <ChatFooter/>
        </>
    )
}