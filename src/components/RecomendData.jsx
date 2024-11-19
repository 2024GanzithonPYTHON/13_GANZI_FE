import { Link } from "react-router-dom"

export default function RecomendData({
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
        <Link to={`/Profilepage/${id}`} key={id} style={{ textDecoration: "none", color:"black"}}>

        <div className='recobox '>
            <img src={img} alt="사진"/>
            <p className='boldname textcenter'>{user}</p>
            <p className='textcenter'>{add}</p>
        </div>
        </Link>
        
        </>
    )
}