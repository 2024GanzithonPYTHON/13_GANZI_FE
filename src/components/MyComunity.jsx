import { Link } from "react-router-dom";
// 내 게시글 확인 각각
export default function MyComunity({
    // postId,
    // nickname,
    // title,
    // content,
    // talent,
    // talentDetail,
    // createdAt,
    // hitCount,
    // commentCount,
    // gender
}
)
{
    return(
        <div>
            {/* <Link to={`/ComuPage/${postId}`} key={postId} style={{ textDecoration: 'none' }}> */}
                <div className="MyComun alink">
                    <div className="glgl" style={{fontSize:13, color: "black"}}>
                        <p  style={{marginBottom:0}} className="title">"title"</p>
                        <p style={{marginBottom:0}} className="rightright">"createdAt"</p>
                    </div>
                    <p>댓글 "commentCount"</p>
                    
                </div>
                <hr/>
            {/* </Link> */}
        </div>
    )
}