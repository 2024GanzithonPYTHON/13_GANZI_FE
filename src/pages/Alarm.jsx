import Alarms from "../components/Alarms"

export default function Alarm(){
    const alarmData=[{
        id:0,
        NotificationType: "MESSAGE",
        userName: "닉네임4",
        content:"내용",
    },
    {
        id:1,
        NotificationType: "COMMENT",
        userName: "닉네임3",
        content:"내용",
    },
    {
        id:2,
        NotificationType: "LIKE",
        userName: "닉네임2",
    },
    {
        id:3,
        NotificationType: "REVIEW",
        userName: "닉네임1",
        content:"내용",
    }
]


    return(
        <div>
            {alarmData.map((alarm) => (
                <Alarms key={alarm.id} {...alarm}/>
            ))}
        </div>
    )
}