import React, { useState, useEffect, useRef } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import axios from 'axios';
import * as C from "../styles/StyledCreateAccount.jsx";

const ChatComponent = () => {
    const [messages, setMessages] = useState([]); // 채팅 메시지 상태
    const [message, setMessage] = useState("");  // 사용자가 입력 중인 메시지
    const [connected, setConnected] = useState(false); // WebSocket 연결 상태
    const clientRef = useRef(null); // STOMP client를 관리

    //const jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI0MWNiZTQ0Yy04NjI2LTQ3ZTAtYWEzOC03NGQwNDliNWJiYWMiLCJpc3MiOiJ0YWxlbnQtdHJhZGUiLCJzdWIiOiI0IiwidHlwZSI6IkFDQ0VTUyIsImlhdCI6MTczMjExNjQzMiwiZXhwIjoxNzMyMjAyODMyfQ.q_-Vb1czEDdRjPG-8z7AFcXdTB-3Ztt0_w1VjftDuQs1hcsC4mKReyj1cumftrS1mNil1duMNlukFhZ25oa1-w"; // JWT 토큰
    const jwtToken =  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI4YzMwOWM0YS01NDFkLTRkMjUtOTg3MS0wZTExZTAwZDU4YjQiLCJpc3MiOiJ0YWxlbnQtdHJhZGUiLCJzdWIiOiI0IiwidHlwZSI6IkFDQ0VTUyIsImlhdCI6MTczMjE5ODYzNiwiZXhwIjoxNzMyMjg1MDM2fQ.Zp_gGVX0CxWQbbvo6NVqBHqZEFHfShrUpF9FCnxs09BFuDSKcwPWXWHKnXju3a2OSh1H3dsxXaoR3CdzaucAWA";
    const senderId = 3;  // 보내는 사람 ID (예제)
    const receiverId = 4; // 받는 사람 ID (예제)
    const chatRoomId = 4; // 채팅방 ID (예제)
    // 메시지 목록을 서버에서 가져오는 함수
    const fetchMessages = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/chatrooms/${chatRoomId}/messages`, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
            });

            // 서버 응답에서 data 배열을 messages 상태로 설정
            if (response.data.code === 200) {
                setMessages(response.data.data); // data 배열을 메시지 상태로 설정
            } else {
                console.error("메시지 로드 실패:", response.data.msg);
            }
        } catch (error) {
            console.error("서버에서 메시지를 가져오는 데 실패했습니다.", error);
        }
    };

    useEffect(() => {
        fetchMessages(); // 컴포넌트 렌더링 시 메시지 목록 가져오기

        // SockJS로 WebSocket 연결
        const socket = new SockJS("http://localhost:8080/chat");
        const client = new Client({
            webSocketFactory: () => socket,
            connectHeaders: {
                Authorization: `Bearer ${jwtToken}` // JWT 토큰 전달
            },
            debug: (str) => console.log("STOMP DEBUG:", str),
            onConnect: () => {
                console.log("WebSocket 연결 성공");
                setConnected(true);

                // 특정 topic에 구독
                client.subscribe(`/topic/chatrooms/${chatRoomId}`, (message) => {
                    const receivedMessage = JSON.parse(message.body);
                    setMessages((prevMessages) => [...prevMessages, receivedMessage]);
                });
            },
            onStompError: (frame) => {
                console.error("STOMP Error:", frame.headers["message"], frame.body);
            },
            onDisconnect: () => {
                console.log("WebSocket 연결 종료");
                setConnected(false);
            },
        });

        clientRef.current = client; // STOMP client를 useRef에 저장
        client.activate(); // WebSocket 연결 활성화

        // 컴포넌트 언마운트 시 연결 해제
        return () => {
            if (clientRef.current) {
                clientRef.current.deactivate();
                console.log("WebSocket 연결 해제");
            }
        };
    }, [jwtToken]);

    // 메시지 전송 함수
    const sendMessage = () => {
        if (message.trim() === "" || !clientRef.current || !connected) {
            console.warn("메시지 전송 실패: 연결 상태 또는 메시지 확인 필요");
            return;
        }

        const messagePayload = {
            chatRoomId,      // 채팅방 ID
            fromMemberId: senderId, // 보내는 사람 ID
            toMemberId: receiverId, // 받는 사람 ID
            content: message,       // 메시지 내용
            createdAt: new Date().toISOString(), // 메시지 생성 시간
        };

        // 메시지 전송
        clientRef.current.publish({
            destination: `/app/chatrooms/${chatRoomId}/send`, // 메시지 전송 경로
            body: JSON.stringify(messagePayload), // JSON 형식으로 전송
        });

        setMessage(""); // 메시지 입력란 초기화
    };

    return (
        <C.Container>
        <div>
            <h2>채팅</h2>
            {!connected ? (
                <p>WebSocket 연결 중...</p>
            ) : (
                <p>WebSocket 연결 완료!</p>
            )}

            {/* 채팅 메시지 목록 */}
            <div>
                {messages.length === 0 ? (
                    <p>아직 메시지가 없습니다.</p>
                ) : (
                    <ul>
                        {messages.map((msg, index) => (
                            <li key={index}>
                                <strong>{msg.fromMemberName || "익명"}:</strong> {msg.content}
                                <div style={{ fontSize: "0.8em", color: "gray" }}>
                                    {new Date(msg.createdAt).toLocaleString()} {/* 날짜 및 시간 표시 */}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>


            {/* 메시지 입력 */}
            <div>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="메시지를 입력하세요"
                    disabled={!connected} // 연결되지 않았을 때 입력 비활성화
                />
                <button onClick={sendMessage} disabled={!connected || !message.trim()}>
                    전송
                </button>
            </div>
        </div></C.Container>
    );
};

export default ChatComponent;
