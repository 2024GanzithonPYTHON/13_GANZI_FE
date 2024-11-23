import Alarms from "../components/Alarms";
import AlarmHeader from "../layout/AlarmHeader";
import { useState,useEffect } from "react";
import axios from "axios";

export default function Alarm() {
  const [alarmData, setAlarmData] = useState([]);  // Store fetched notifications
  const [AlarmCheck, setAlarmCheck] = useState(false);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get("https://api.talent-trade.site/notification/get", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,  // Assuming you store JWT token in localStorage
        },
      });
      setAlarmData(response.data.data.notifications);  // Assuming response contains the notifications in data.data
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };
  useEffect(() => {
    fetchNotifications();
  }, []);

  const onClickAlarm = () => {
    setAlarmCheck(true);
  };
  return (
    <div>
      <AlarmHeader />
      {Array.isArray(alarmData) ? (
        alarmData.map((alarm) => (
          <Alarms
            key={alarm.notificationId}
            notificationId={alarm.notificationId}
            type={alarm.type}
            fromMemberNickname={alarm.fromMemberNickname}
            content={alarm.content}
            receivedAt={alarm.receivedAt}
            checked={alarm.checked}
            onClickAlarm={onClickAlarm}
          />
        ))
      ) : (
        <p>No notifications available</p>  // Display a message if alarmData is not an array
      )}
    </div>
  );
}
