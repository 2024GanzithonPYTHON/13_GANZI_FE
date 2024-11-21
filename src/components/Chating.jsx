import { Link } from "react-router-dom"
import './Chating.css'


export default function Chating({
    chatId,
    sentid,
    text,
}){
    return(
        <>
        <Link to={`/ChatPage/${chatId}`} key={chatId} style={{ textDecoration: 'none' }}>
        <div className="glgl Comun alink">
            
            <div className="chatdivblock" style={{width:50, height:50}}>
                <img style={{width:31, height:31}} src="/female.png" alt="사진"/>
            </div>
            <div  style={{marginLeft:10}} className="jljl ppsize">
                <div className="glgl">
                    <p style={{fontSize:13, fontWeight:700, margin:2}}>{sentid}</p>
                    <p style={{fontSize:13, fontWeight:700, margin:2}}>Keyword</p>
                    <p style={{fontSize:13, fontWeight:700, margin:2}}>|</p>
                    <p style={{fontSize:13, fontWeight:700, margin:2}}>add</p>
                    <p className="rightright" style={{fontSize:10, fontWeight:700}}>시간</p>
                </div>
                <div style={{fontSize:13, fontWeight:400, margin:2}}> 
                    {text}
                </div>
            </div>
        </div>
        </Link>
        <hr/>
        </>
    )
}