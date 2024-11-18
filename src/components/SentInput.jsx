import "./SentInput.css"
// input component css 수정 해야함
export default function SentInput({value, onChange, onClick}){
    return(
        <div className="inputbox">
            <div className="inputboxbox">
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    className="inputinput"
                    placeholder="댓글을 입력해주세요."/>
                <button className="sentbutton" onClick={onClick}><img src="/sent.png" alt="전송"/></button>
            </div>
        </div>
    )
}