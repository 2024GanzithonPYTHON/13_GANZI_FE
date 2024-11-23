import Alarms from "../components/Alarms"
import AlarmHeader from "../layout/AlarmHeader"
import Header from "../layout/Header"

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
        id:3,
        NotificationType: "REVIEW",
        userName: "닉네임1",
        content:"내용",
    },
  
]


    return(
        <div className='app'>
    <Header/>
      <div className='content'>
        <div>
            <AlarmHeader/>
            {alarmData.map((alarm) => (
                <Alarms key={alarm.id} {...alarm}/>
            ))}
        </div>
        </div>
        </div>
    )
}