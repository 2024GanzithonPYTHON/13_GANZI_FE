import './ViewMessage.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function ViewMessage({
    myData,
    chatId,
    sentid,
    text,
    senderName,
    timestamp,
}) {
    const chatClass = sentid === myData.id ? 'rightChat' : 'leftChat';

    const formatTimestamp = (isoDate) => {
        const date = new Date(isoDate);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })}`;
    };

    return (
        <div className="chatContainer">
            <div className={`${chatClass} chatMessage`}>
                <div className="messageHeader">
                    <span className="senderName">{senderName}</span>
                    <span className="timestamp">{formatTimestamp(timestamp)}</span>
                </div>
                <div className="messageText">{text}</div>
            </div>
        </div>
    );
}

ViewMessage.propTypes = {
    myData: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired,
    chatId: PropTypes.number.isRequired,
    sentid: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    senderName: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
};
