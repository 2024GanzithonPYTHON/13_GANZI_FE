import './NewComu';
import { Link } from "react-router-dom";

export default function Comu({datas}){
    return(
        <>
            <div>커뮤니티</div>
            <Link to="/NewComu"><button>새 글 작성</button></Link>
            
        </>
    )
}