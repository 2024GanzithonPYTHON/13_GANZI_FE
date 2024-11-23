import { useParams,useLocation,useSearchParams   } from "react-router-dom";
import { useState,useEffect,useRef } from "react";
import ViewMessage from "../components/Message/ViewMessage";
import SentInput from "../components/SentInput";
import Modal from 'react-modal';
import ChatingHeader from "../layout/ChatingHeader";
import axios from "axios";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

//채팅
export default function ChatPage(){
    const [ChatText, setChatText] = useState('')
    const { ID } = useParams();
    const [chatInfo, setChatInfo] = useState([]);
    const clientRef = useRef(null); // STOMP client를 관리
    const [connected, setConnected] = useState(false); // WebSocket 연결 상태

    const domain = "https://api.talent-trade.site";
    const [searchParams] = useSearchParams();
   
    const oppId = searchParams.get("oppId");
    const fromId = searchParams.get("fromId");
    // const location = useLocation(); // Use useLocation to access state
    // const { oppId, fromId } = location.state || {}; // Destructure from location.state
  // state가 존재하지 않으면 기본값을 설정하거나 경고 메시지를 출력
    if (!oppId || !fromId) {
        console.warn("oppId 또는 fromId가 전달되지 않았습니다.");
    }

    console.log("Received ID:", ID);
    console.log("Received oppId:", oppId);
    console.log("Received fromId:", fromId);//내 아이디
    const accessToken = localStorage.getItem("accessToken"); 
    
    const fetchMessages = async () => {
        try {
            const response = await axios.get(`${domain}/chatrooms/${ID}/messages`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            console.log("Chat messages fetched:", response.data);
            setChatInfo(response.data);
        } catch (error) {
            console.error("Failed to fetch chat messages:", error);
        }
    };


    const onChageChatText = (e) => (
        setChatText(e.target.value)
    )


    const onClickSend = async () => {
        if (ChatText.trim() === "" || !clientRef.current || !connected) {
            console.warn("Cannot send message: Check connection or input");
            return;
        }

        const messagePayload = {
            ID, // Chatroom ID
            fromMemberId: fromId, // Sender ID (example)
            toMemberId: oppId, // Receiver ID (example)
            content: ChatText, // Message content
            createdAt: new Date().toISOString(), // Timestamp
        };
        console.log("Sending message data:", messagePayload);
        clientRef.current.publish({
            destination: `/app/chatrooms/${ID}/send`,
            body: JSON.stringify(messagePayload),
        });

        setChatText(""); // Clear input
        // try {
        //     await fetchMessages(); // 메시지를 보낸 후 최신 메시지 가져오기
        // } catch (error) {
        //     console.error("Failed to fetch messages after sending:", error);
        // }
    };



   

    useEffect(() => {
        fetchMessages(); 

        const socket = new SockJS(`${domain}/chat`);
        const client = new Client({
            webSocketFactory: () => socket,
            connectHeaders: {
                Authorization: `Bearer ${accessToken}`,
            },
            debug: (str) => console.log("STOMP DEBUG:", str),
            onConnect: () => {
                console.log("WebSocket connected");
                setConnected(true);

                // Subscribe to the chatroom topic
                client.subscribe(`/topic/chatrooms/${ID}`, (message) => {
                    const receivedMessage = JSON.parse(message.body);
                    setChatInfo((prev) => [...prev, receivedMessage]); // Append new messages
                });
            },
            onStompError: (frame) => {
                console.error("STOMP Error:", frame.headers["message"], frame.body);
            },
            onDisconnect: () => {
                console.log("WebSocket disconnected");
                setConnected(false);
            },
        });

        clientRef.current = client; 
        client.activate(); 


        return () => {
            if (clientRef.current) {
                clientRef.current.deactivate();
                console.log("WebSocket deactivated");
            }
        };
    }, [ accessToken]);

    return(
        <div>
            <ChatingHeader chatInfo ={chatInfo}/>
            {/* 메세지 출력 */}
            <div>
           {(Array.isArray(chatInfo) ? chatInfo : []).map((chat, index) => (
        <ViewMessage
            key={chat.chatRoomId} // 채팅방 ID 사용
            myData={{ id: fromId }} // 현재 사용자 ID
            i={index} // 인덱스 전달
            chatId={chat.chatRoomId} // 메시지 ID
            sentid={fromId} // 발신자 ID
            text={chat.content} // 메시지 내용
        />
    ))}
                {/* 메세지 개별 출력 */}
                {/* {fillterChat.map((chat) => (
                    <ViewMessage myData={myData} i={i[0]} key={chat.chatId} {...chat}/>
                ))} */}
            </div>
            <SentInput value={ChatText} onChange={onChageChatText} onClick={onClickSend}/>
            
        </div>
    )
}