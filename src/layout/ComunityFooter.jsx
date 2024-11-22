import React from "react";
import '../pages/Main';
import '../pages/Comu';
import '../pages/Chats'
import '../pages/MyPage';
import { Link } from "react-router-dom";
import './Footer.css';

const ComunityFooter = () =>{
    return(
        <footer className="footer">
            <Link to="/Main" style={{ textDecoration: 'none' }}>
                <div className="footerDiv">
                    <img style={{width:25, height:25}}
                        id="Home"
                        src={`${process.env.PUBLIC_URL}/images/Home.svg`}
                        alt="Home"
                    />
                    <p>홈</p>
                </div>
            </Link>
            <Link to="/Chats" style={{ textDecoration: 'none' }}>
                <div className="footerDiv">
                    <img style={{width:34, height:27}}
                        id="Chating"
                        src={`${process.env.PUBLIC_URL}/images/Chating.svg`}
                        alt="Chating"
                    />
                    <p>채팅</p>
                </div>
            </Link>
            <Link to="/Comu" style={{ textDecoration: 'none' }}>
                <div className="footerDiv">
                    <img style={{width:33, height:33}}
                        id="People"
                        src={`${process.env.PUBLIC_URL}/images/ClickPeople.svg`}
                        alt="People"
                    />
                    <p className="blueColor" >커뮤니티</p>
                </div>
            </Link>
            <Link to="/MyPage" style={{ textDecoration: 'none' }}>
                <div className="footerDiv">
                    <img style={{width:25, height:25,  marginBottom:2}}
                        id="Person"
                        src={`${process.env.PUBLIC_URL}/images/Person.svg`}
                        alt="Person"
                    />
                    <p style={{marginTop:5}}>마이페이지</p>
                </div>
            </Link>
        </footer>
    );
};

export default ComunityFooter;