import { useNavigate } from "react-router-dom"

export default function ReviewHeader({onClickReviewStoring}){
    let navigate = useNavigate()
    return(
        <div className="PageHeader">
        <div className="HeaderDiv">
            <img onClick={()=>{ navigate(-1) }}
                style={{width:35, height:30,marginLeft:40}}
                id="BackButton"
                src={`${process.env.PUBLIC_URL}/images/BackButton.svg`}
                alt="BackButton"
            />
            <p className="HeaderCenter HeaderName" style={{width:90, height:48, fontSize:20, fontWeight:400, marginTop:40}}
            >후기 작성</p>
            <p style={{width:35, height:30, marginRight:40}} onClick={onClickReviewStoring}>완료</p>
        </div>
        <hr style={{marginTop:110}}/>
        </div>
    )
}