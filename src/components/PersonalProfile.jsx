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
        <div className='box'>
            <p>username: {user}</p>
            <p>{content}</p>
            <p>제공 키워드: {gKeyword}</p>
            <p>add: {add}</p>
        </div>
        </Link>
        </>
    )
}