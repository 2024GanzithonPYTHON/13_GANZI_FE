import './Comunity.css'
import { Link } from 'react-router-dom'
// 커뮤니티 각각
export default function Comunity({
    // postId,
    // nickname,
    // title,
    // content,
    // talent,
    // talentDetail,
    // createdAt,
    // hitCount,
    // commentCount,
    // gender,
}){
    return(
        <>
        {/* <Link to={`/ComuPage/${postId}`} key={postId} style={{ textDecoration: 'none' }}> */}
        <div className="Comun alink" style={{textDecoration: "none", height: 143}}>
            <p className='title'>"title'</p>
            <p style={{height:50}}>"content"</p>
            <div className="Comun pcolor">
                <p className='inlineblock'>"nickname"</p>
                <p className='inlineblock'>"talent"</p>
                <p className='inlineblock'>|</p>
                <p className='inlineblock'>add</p>
                <p className='inlineblock'>"createdAt"</p>
                <p className='inlineblock'>"hitCount"</p>
            </div>
        </div>
        {/* </Link> */}
        <hr/>
        </>

    )
}