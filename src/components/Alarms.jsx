import { useEffect, useState} from "react"
import { Link } from "react-router-dom"
import './Alarm.css';

export default function Alarms({
    id,
    NotificationType,
    userName,
    content,
}
){

    const [ link, setLink ] = useState("")
    const [ alarmMessage, setAlarmMessage ] = useState("")

    useEffect(() => {
        NotifiTypeLink()
    },[])
    
    const NotifiTypeLink = () => {
        if (NotificationType === "MESSAGE") {
            setLink(`/ChatPage/${id}`)
            setAlarmMessage(`${userName}님께 새로운 메세지가 도착했어요`)
        } else if (NotificationType === "COMMENT") {
            setLink(`/ComuPage/${id}`)
            setAlarmMessage(`${userName}님이 새로운 댓글을 달았어요`)
        } else if (NotificationType === "REVIEW"){
            setLink(`/MyReview`)
            setAlarmMessage("재능 교환 후기가 달렸어요")
        }else{
            setAlarmMessage(`${userName}님이 좋아요를 달았어요`)
        }

    }



    return(
        <div>
            <Link to={link} key={id} >
            <div className="placecenter">
                <p style={{fontSize:13, fontWeight:"bold"}}>{alarmMessage}</p>
                <p style={{fontSize:13}}>{content}</p>
            </div>
            </Link>
            <hr/>
        </div>
    )
}