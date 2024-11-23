import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SearchHeader() {
  let navigate = useNavigate();
  return (
    <div
      className="PageHeader"
      style={{
        marginLeft: "580px",
      }}
    >
      <div
        className="HeaderDiv"
        style={{
          marginLeft: "580px",
        }}
      >
        <img
          onClick={() => {
            navigate("/detail");
          }}
          style={{ width: 30, height: 30, marginLeft: 40 }}
          id="BackButton"
          src={`${process.env.PUBLIC_URL}/images/BackButton.svg`}
          alt="BackButton"
        />
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
