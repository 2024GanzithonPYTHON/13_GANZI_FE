import { useNavigate } from "react-router-dom";

export default function MyComuHeader() {
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
            navigate(-1);
          }}
          style={{ width: 30, height: 30, marginLeft: 40 }}
          id="BackButton"
          src={`${process.env.PUBLIC_URL}/images/BackButton.svg`}
          alt="BackButton"
        />
        <p
          className="HeaderCenter HeaderName"
          style={{
            width: 132,
            height: 48,
            fontSize: 20,
            fontWeight: 400,
            marginTop: 40,
          }}
        >
          내가 쓴 게시물
        </p>
        <p style={{ width: 30, height: 30, marginRight: 40 }} />
      </div>
      <hr style={{ marginTop: 110 }} />
    </div>
  );
}
