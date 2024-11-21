import './PersonalProfile.css';

import { Link } from "react-router-dom";
// 메인 페이지 프로필 각각
export default function PersonalProfile({
    id,
    user,
    content,
    wKeyword,
    gKeyword,
    add,
    gender,
    preferGender,
    time,
    reviews,
    stars,
    img,
}){
  
  

    return(
        <>

            
            <Link to={`/Profilepage/${id}`} key={id} style={{ textDecoration: "none"}}>

            <div className='personalbox alink'>
                <img src={img} alt="사진"/>

                <p className='boldname textcenter'>{user} {add}</p>
                <p className='textcenter'>{content}</p>
    
                

            </div>
            </Link>
        </>
    )
}