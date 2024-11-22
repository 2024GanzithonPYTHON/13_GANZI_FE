import Alarms from "../components/Alarms"
import AlarmHeader from "../layout/AlarmHeader"
import { useState } from "react";

export default function Alarm(){
    const alarmData=[{
        notificationId:0,
        type: "MESSAGE",
        fromMemberNickname: "닉네임4",
        content:"내용",
    },
    {
        notificationId:1,
        type: "COMMENT",
        fromMemberNickname: "닉네임3",
        content:"내용",
    },
    {
        notificationId:3,
        type: "REVIEW",
        fromMemberNickname: "닉네임1",
        content:"내용",
    },
  
]


// 알람 데이터 받아오면 알람 데이터 자리에 대체 하면 됩니다

const [ AlarmCheck, setAlarmCheck ] =useState(false);

const onClickAlarm = () =>{
    setAlarmCheck(true)
}
    return(
        <div>
            <AlarmHeader/>
            {alarmData.map((alarm) => (
                <Alarms onClickAlarm={onClickAlarm} AlarmCheck={AlarmCheck} key={alarm.notificationId} {...alarm}/>
            ))}
        </div>
    )
}