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
        <Link to={`/ComuPage/${id}`} key={id}>
        <div className="Comun" style={{textDecoration: "none",}}>
            <p className='title'>{title}</p>
            <p>{content}</p>
            <p className='inlineblock'>{userName}</p>
            <p className='inlineblock'>{userKeyword}</p>
            <p className='inlineblock'>{time}</p>
            <p className='inlineblock'>{view}</p>

        </div>
        </Link>
        <hr/>
        </>

    )
}