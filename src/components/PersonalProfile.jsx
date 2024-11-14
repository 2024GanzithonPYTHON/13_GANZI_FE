import './PersonalProfile.css';

import { Link } from "react-router-dom";

export default function PersonalProfile({
    id,
    user,
    content,
    wKeyword,
    gKeyword,
    add,
}){
    return(
        <>
            
            <Link to={`/Profilepage/${id}`} key={id} style={{ textDecoration: "none"}}>
            <div className='personalbox'>
                <img src='man.png' />
                <p>{user}</p>
                <p>{add}</p>
                <p>{content}</p>
                
            </div>
            </Link>
        </>
    )
}