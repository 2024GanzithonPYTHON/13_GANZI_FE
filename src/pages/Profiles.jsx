import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import '../pages/Reviews';
import './Profiles.css';
import '../components/Introduce';
import DetailIntroduce from "../components/DetailIntroduce";
import TalentIntroduce from "../components/TalentIntroduce";
import Introduce from "../components/Introduce";
import AlarmHeader from "../layout/AlarmHeader";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

const Profiles = () => {
    const { ID } = useParams();
    const [member, setMember] = useState(null); // Initialize member as null
    const domain = "https://api.talent-trade.site";
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken"); 
        const fetchData = async () => {
            try {
                const response = await axios.get(`${domain}/profile/detail/${ID}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`, 
                    },
                });

                console.log("프로필 상세 조회:", response.data); 
                console.log("프로필 상세 조회2:", response.data.data); 
                if (response.data && response.data.data) {
                    setMember(response.data); 
                } else {
                    console.error("Invalid response structure");
                }

            } catch (error) {
                console.error("API Error:", error);
            }
        };
        fetchData();
    }, [ID]); 

    //채팅방 만들고 채팅방으로 넘어가기
    const handleCreateChatRoom = async () => {
        const accessToken = localStorage.getItem("accessToken");
        try {
            const response = await axios.post(
                `${domain}/chatrooms/create`, 
                null,
                {
                    params: {
                        toMemberId: ID,
                    },
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            console.log('채팅방 생성:', response.data);
            const roomId = response.data.data.roomId;
            console.log("Room ID:", roomId);
          
            if (roomId && !isNaN(Number(roomId))) {

                navigate(`/ChatPage/${Number(roomId)}`, {
                     state: { 
                        oppId: ID,
                        fromId: response.data.data.fromMemberId,  },
                });
            } else {
                console.error("Invalid roomId:", roomId);
            }
        } catch (error) {
            if (error.response && error.response.data) {
                if (error.response.data.code === 409) {
                    alert("이미 채팅방이 존재합니다.");
                }
            }
            console.error("Error creating chat room:", error);
        }
    };

    if (!member) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <AlarmHeader />
            {member && <Introduce memberInfo={member} />}
            <hr />
            <div className="clickdiv">
                <div className="underline">재능 소개</div>
                <Link to={`/ReviewWrite/${ID}`} key={ID} className="alink">
                <div className="text underline">후기</div>
                </Link>
            </div>

            {member && <TalentIntroduce memberInfo={member} />}
            <hr />
            {member && <DetailIntroduce memberInfo={member} />}

            <button className="button">
                <img
                    className="HeaderCenter"
                    style={{ width: 24, height: 24 }}
                    id="ChaWhiteChatting"
                    src={`${process.env.PUBLIC_URL}/images/WhiteChat.svg`}
                    alt="WhiteChat"
                    onClick={handleCreateChatRoom}
                />
            </button>

            <Footer />
        </>
    );
};

export default Profiles;
