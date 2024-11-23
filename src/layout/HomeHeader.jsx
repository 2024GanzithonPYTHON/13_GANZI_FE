import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <div
      className="PageHeader"
      style={{
        marginLeft: "587px",
      }}
    >
      <div
        className="HeaderDiv"
        style={{
          marginLeft: "584px",
          marginTop: "5px",
        }}
      >
        <p style={{ width: 30, height: 30, marginLeft: 40 }} />
        <img
          className="HeaderCenter"
          style={{ width: 44, height: 48 }}
          id="Tt"
          src={`${process.env.PUBLIC_URL}/images/Tt.svg`}
          alt="Tt"
        />
        <Link to="/Alarm">
          <img
            style={{ width: 30, height: 30, marginRight: 40 }}
            id="Alarm"
            src={`${process.env.PUBLIC_URL}/images/Alarm.svg`}
            alt="Alarm"
          />
        </Link>
      </div>
      <hr style={{ marginTop: 110 }} />
    </div>
  );
}
