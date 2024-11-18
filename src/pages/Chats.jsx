import { Link } from "react-router-dom"
// 채팅 목록 수정 해야함
export default function Chats({chatInfo}){
    return(
        <>
            <Link to={`/ChatPage/${chatInfo[2].chatId}`} key={chatInfo[2].chatInfo}>
                <div className="marginbox">
                    {chatInfo[2].sentid}
                    <p>{chatInfo[2].text}</p>
                </div>
            </Link>

            <hr />
        </>
    )
}