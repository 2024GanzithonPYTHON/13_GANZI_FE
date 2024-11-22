import './KeywordSort.css';
// 최신순, 리뷰 수 정렬
export default function ProfileSort({closeModal, setSelectSort, setSorting}){

    const onSelectChange=(e)=>{
        console.log(e.target.value)
        setSelectSort( e.target.value);
        const selectedSorting = e.target.innerText;
        setSorting(selectedSorting);
        closeModal();
    }; 

    return(
        <div id="modal-scrollable" className="modal-scrollable" >
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
                <button value={"RECENT_MEMBER"} onClick={onSelectChange} className='sortingbutton'>최신순</button>
                <hr className='sortingline'/>
                <button value={"REVIEW"} onClick={onSelectChange} className='sortingbutton'>리뷰 개수 순</button>
                <hr className='sortingline'/>
                <button value={"SCORE"} onClick={onSelectChange} className='sortingbutton'>평점 높은 순</button>
            </div>
    )
}