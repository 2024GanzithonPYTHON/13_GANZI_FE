import React from "react";
import '../pages/Main';
import '../pages/Comu';
import '../pages/MyPage';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () =>{
    return(
        <footer className="footer">
            <Link to="/">
                <button>Ma</button>
            </Link>
            <Link to="/Comu">
                <button>Co</button>
            </Link>
            <Link to="/MyPage">
                <button>My</button>
            </Link>
        </footer>
    );
};

export default Footer;