import { useEffect, useState} from "react"
import { Link } from "react-router-dom"
import './Alarm.css';

export default function Alarms({
    onClickAlarm,
    AlarmClick,
    // notificationId,
    // type,
    // fromMemberNickname,
    // content,
    // contentId,
    // receivedAt,
    // checked,
}
){

    const [ link, setLink ] = useState("")
    const [ alarmMessage, setAlarmMessage ] = useState("")

    // useEffect(() => {
    //     NotifiTypeLink()
    // },[])
    
    // const NotifiTypeLink = () => {
    //     if (type === "MESSAGE") {
    //         setLink(`/ChatPage/${contentId}`)
    //         setAlarmMessage(`${fromMemberNickname}님께 새로운 메세지가 도착했어요`)
    //     } else if (type === "COMMENT") {
    //         setLink(`/ComuPage/${contentId}`)
    //         setAlarmMessage(`${fromMemberNickname}님이 새로운 댓글을 달았어요`)
    //     } else{
    //         setLink(`/MyReview`)
    //         setAlarmMessage("재능 교환 후기가 달렸어요")
    //     }

    // }



    return(
        <div>
            {/* <Link to={link} key={contentId} style={{ textDecoration: 'none', color:"black" }}> */}
            <div onClick={onClickAlarm} className="placecenter" style={{backgroundColor: AlarmClick ? "#ffffff" : "#D9D9D9"}}>
                <p style={{fontSize:13, fontWeight:"bold"}}>{alarmMessage}</p>
                <p style={{fontSize:13}}>"content"</p>
            </div>
            {/* </Link> */}
            <hr/>
        </div>
    )
}