import { Link } from "react-router-dom";
// 내 게시글 확인 각각
export default function MyComunity({
    id,
    userName,
    userKeyword,
    title,
    content,
    time,
    view,
}
)
{
    return(
        <div>
            <Link to={`/ComuPage/${id}`} key={id}>
                <div className="Comun">
                    <div className="glgl" style={{fontSize:13, color: "black"}}>
                        <p  style={{marginBottom:0}} className="title">{title}</p>
                        <p style={{marginBottom:0}} className="rightright">날짜</p>
                    </div>
                    <p>댓글</p>
                    
                </div>
                <hr/>
            </Link>
        </div>
    )
}