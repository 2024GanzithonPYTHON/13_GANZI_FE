import './Comu';
import { Link } from "react-router-dom";
import './NewComu.css';
import { useState } from 'react';

export default function NewComu({datas, myData}){
    const [ comuTitle, setComuTitle ] = useState("");
    const [ comuText, setComuText] = useState("");


    const onChageComuTitle = (e) => {
        setComuTitle(e.target.value)
    }

    const onChageComuText = (e) => {
        setComuText(e.target.value)
    }

    return(
        <>
        <div className='center'>
        <input
            value={comuTitle} onChange={onChageComuTitle} className="custominput"placeholder='제목을 입력해 주세요.'></input>
        </div>
        <hr />
        <div className='center'>
        <textarea
            value={comuText} onChange={onChageComuText} className="customtextarea" placeholder='내용을 입력해 주세요.'/>
        </div>
        <button>저장</button>
        <Link to="/Comu"><button>뒤로</button></Link>
        </>
    )
}