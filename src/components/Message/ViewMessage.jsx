import { useParams } from 'react-router-dom';
import './ViewMessage.css';
import React from 'react';
// 채팅메세지 수정해야함
export default function ViewMessage({
    myData,
    i,
    chatId,
    sentid,
    text,
}) {
    const chatClass = sentid === myData.id ? 'rightChat' : 'leftChat';

    return (
        <div className="chatContainer">
            <div className={`${chatClass} chatMessage`}>
                <div className="messageText">{text}</div>
            </div>
        </div>
    );
}
