import './Comunity.css'
import { Link } from 'react-router-dom'
// 커뮤니티 각각
export default function Comunity({comu}){
    return(
        <>
        <Link to={`/ComuPage/${comu.postId}`} key={comu.postId} style={{ textDecoration: 'none' }}>
        <div className="Comun alink" style={{textDecoration: "none", height: 143}}>
            <p className='title'>{comu.title}</p>
            <p style={{height:50}}>{comu.content}</p>
            <div className="Comun pcolor">
                <p className='inlineblock'>{comu.nickname}</p>
                <p className='inlineblock'>{comu.talent}</p>
                <p className='inlineblock'>|</p>
                <p className='inlineblock'>{comu.talentDetail}</p>
                <p className='inlineblock'>{comu.createdAt}</p>
                <p className='inlineblock'>{comu.hitCount}</p>
            </div>
        </div>
     </Link> 
        <hr/>
        </>

    )
}