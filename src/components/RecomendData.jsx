import { Link } from "react-router-dom"
import { useState,useEffect } from "react";

export default function RecomendData({
    // memberId,
	// nickname,
	// gender,
	// talent,
	// comment,
}){
     const [genderImg, setGenderImg] = useState("/man.png");

    // const genderImage = () => {
    //   if (gender === "MALE") {
    //     setGenderImg("/man.png");
    //   } else {
    //     setGenderImg("/female.png");
    //   }
    // };
  
    // useEffect(() => {
    //   genderImage();
    // }, [gender]);


    return(
        <>
        {/* <Link to={`/Profilepage/${memberId}`} key={memberId} style={{ textDecoration: "none", color:"black"}}> */}

        <div className='recobox alink'>
            <img src={genderImg} alt="사진"/>
            <p className='boldname textcenter'>"nickname"</p>
            <p className='textcenter'>"comment"</p>
        </div>
        {/* </Link> */}
        
        </>
    )
}