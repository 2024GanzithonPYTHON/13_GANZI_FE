import './Comunity.css'
import { Link } from 'react-router-dom'
// 커뮤니티 각각
export default function Comunity({
    id,
    userName,
    userKeyword,
    title,
    content,
    time,
    view,
}){
    return(
        <>
        <Link to={`/ComuPage/${id}`} key={id} style={{ textDecoration: 'none' }}>
        <div className="Comun alink" style={{textDecoration: "none", height: 143}}>
            <p className='title'>{title}</p>
            <p style={{height:50}}>{content}</p>
            <div className="Comun pcolor">
                <p className='inlineblock'>{userName}</p>
                <p className='inlineblock'>{userKeyword}</p>
                <p className='inlineblock'>|</p>
                <p className='inlineblock'>add</p>
                <p className='inlineblock'>{time}</p>
                <p className='inlineblock'>{view}</p>
            </div>
        </div>
        </Link>
        <hr/>
        </>

    )
}