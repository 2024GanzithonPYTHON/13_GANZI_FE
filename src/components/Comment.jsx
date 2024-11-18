export default function Comment({
    id,
    ComuPage,
    content,
    userName,
    userKeyword,
    userAdd,
    time,
    img,
}){
    return(
        // 게시물 댓글
        <>
        <div className="marginbox">
                <div className="glgl">
                <img style={{width:45, height:45, marginRight:10}}src = {img} alt="사진"/>
                    <div className="jljl">
                        <p className="boldsize" style={{marginBottom:0}}>{userName}</p>
                    
                        <div className="glgl">
                            <p style={{marginTop:0}}>{userKeyword}</p>
                            <p style={{marginTop:0, marginRight:5, marginLeft:5}}> | </p>
                            <p style={{marginTop:0}}>{userAdd}</p>
                        </div>
                    </div >
                    </div >
                    <p style={{fontSize:13}}>{content}</p>

                    </div>
            <hr/>
        </>
    )
}