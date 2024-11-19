import React from "react";
import '../pages/Main';
import '../pages/Comu';
import '../pages/Chats'
import '../pages/MyPage';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () =>{
    return(
        <footer className="footer">
            <Link to="/Main">
                <button>Ma</button>
            </Link>
            <Link to="/Comu">
                <button>Co</button>
            </Link>
            <Link to="/MyPage">
                <button>My</button>
            </Link>
            <Link to="/Chats">
                <button>Chat</button>
            </Link>
        </footer>
    );
};

export default Footer;