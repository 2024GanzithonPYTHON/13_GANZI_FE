import React from "react";
import './Header.css';
import * as L from "../styles/StyledHeader.jsx";
import { useNavigate } from "react-router-dom";


const Header = () =>{

  let navigate = useNavigate()
    return(
        <header className="Header">
  
            <L.Header>
              <img
                id="time"
                src={`${process.env.PUBLIC_URL}/images/Time.svg`}
                alt="time"
              />
              <img
                id="group"
                src={`${process.env.PUBLIC_URL}/images/HeaderGroup.svg`}
                alt="group"
              />
               
            </L.Header>
            
          
        </header>
    );
};

export default Header;