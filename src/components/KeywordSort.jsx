import './KeywordSort.css';
// 키워드 정렬ㄹ
export default function KeywordSort({closeModal, setSelectData, setKeyword}){

    const onSelectChange=(e)=>{
        console.log(e.target.value)
        setSelectData( e.target.value);
        const selectedText = e.target.innerText;
        setKeyword(selectedText);
    }; 

    return(
        <div id="modal-scrollable" className="modal-scrollable">
            <button onClick={closeModal}>Close Modal</button>
                <p>정렬</p>
                <hr className='sortingline'/>
                <button value={""} onClick={onSelectChange} className='sortingbutton'>전체</button>
                <hr className='sortingline'/>
                <button value={"music"} onClick={onSelectChange} className='sortingbutton'>음악</button>
                <hr className='sortingline'/>
                <button value={"foreign"} onClick={onSelectChange} className='sortingbutton'>외국어</button>
                <hr className='sortingline'/>
                <button value={"economy"} onClick={onSelectChange} className='sortingbutton'>경제</button>
                <hr className='sortingline'/>
                <button value={"IT"} onClick={onSelectChange} className='sortingbutton'>IT</button>
                <hr className='sortingline'/>
                <button value={"design"} onClick={onSelectChange} className='sortingbutton'>디자인</button>
                <hr className='sortingline'/>
                <button value={"dance"} onClick={onSelectChange} className='sortingbutton'>댄스</button>
                <hr className='sortingline'/>
                <button value={"game"} onClick={onSelectChange} className='sortingbutton'>게임</button>
                <hr className='sortingline'/>
                <button value={"fashion"} onClick={onSelectChange} className='sortingbutton'>패션</button>
                <hr className='sortingline'/>
                <button value={"others"} onClick={onSelectChange} className='sortingbutton'>기타</button>
            </div>
    )
}