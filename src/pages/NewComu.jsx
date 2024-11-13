import './Comu';
import { Link } from "react-router-dom";

export default function NewComu({datas}){
    return(
        <>
        <input></input>
        <input></input>
        <button>저장</button>
        <Link to="/Comu"><button>뒤로</button></Link>
        </>
    )
}