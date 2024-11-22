import './KeywordSort.css';
// 키워드 정렬
export default function KeywordSort({closeModal, setSelectData, setKeyword}){

    const onSelectChange=(e)=>{
        console.log(e.target.value)
        setSelectData( e.target.value);
        const selectedText = e.target.innerText;
        setKeyword(selectedText);
        closeModal();
    }; 

    // 전체/IT/경제경영/외국어/디자인/음악/댄스/게임/패션/기타 순으로
    return(
        <div id="modal-scrollable" className="modal-scrollable">
            <div className='SortTop'>
                <img style={{width:21, margin:20}}
                    onClick={closeModal}
                    id="SortExitButton"
                    src={`${process.env.PUBLIC_URL}/images/SortExitButton.svg`}
                    alt="SortExitButton"
                />
                <p className="modalSortP" style={{margin:"auto", width:40, fontWeight:"bold", fontSize:20}}>정렬</p>
                <p className="modalSortP" style={{width:21, margin:20}}/>
            </div>
                <hr className='sortingline'/>
                <button value={""} onClick={onSelectChange} className='sortingbutton'>전체</button>
                <hr className='sortingline'/>
                <button value={"IT"} onClick={onSelectChange} className='sortingbutton'>IT</button>
                <hr className='sortingline'/>
                <button value={"BUSINESS"} onClick={onSelectChange} className='sortingbutton'>경제경영</button>
                <hr className='sortingline'/>
                <button value={"FOREIGN"} onClick={onSelectChange} className='sortingbutton'>외국어</button>
                <hr className='sortingline'/>
                <button value={"DESIGN"} onClick={onSelectChange} className='sortingbutton'>디자인</button>
                <hr className='sortingline'/>
                <button value={"MUSIC"} onClick={onSelectChange} className='sortingbutton'>음악</button>
                <hr className='sortingline'/>
                <button value={"DANCE"} onClick={onSelectChange} className='sortingbutton'>댄스</button>
                <hr className='sortingline'/>
                <button value={"GAME"} onClick={onSelectChange} className='sortingbutton'>게임</button>
                <hr className='sortingline'/>
                <button value={"FASHION"} onClick={onSelectChange} className='sortingbutton'>패션</button>
                <hr className='sortingline'/>
                <button value={"ETC"} onClick={onSelectChange} className='sortingbutton'>기타</button>
            </div>
    )
}