export default function Comment({
    commentInfo
}){
    return(
        // 게시물 댓글
        <>
        <div className="marginbox">
                <div className="glgl">
                {commentInfo.gender === "FEMALE" ? (
          <img
            src="/images/PersonWoman.svg"
            alt="Female Avatar"
            style={{width:45, height:45, marginRight:10}}
          />
        ) : (
          <img
            src="/images/PersonMan.svg"
            alt="Male Avatar"
            style={{width:45, height:45, marginRight:10}}
          />
        )}
                {/* <img style={{width:45, height:45, marginRight:10}}src = {img} alt="사진"/> */}
                    <div className="jljl ppsize">
                        <p className="boldsize " style={{marginBottom:0}}>{commentInfo.nickname}</p>
                    
                        <div className="glgl">
                            <p className="boldsize" style={{marginTop:0}}>{commentInfo.talent}</p>
                            <p className="boldsize" style={{marginTop:0, marginRight:5, marginLeft:5}}> | </p>
                            <p className="boldsize" style={{marginTop:0}}>{commentInfo.talentDetail}</p>
                            <p style={{marginTop:0}} className="graycolor rightright">{commentInfo.createdAt}</p>
                        </div>
                    </div >
                    </div >
                    <p style={{fontSize:13}}>{commentInfo.content}</p>

                    </div>
            <hr/>
        </>
    )
}