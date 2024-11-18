import './KeywordSort.css';
// 최신순, 리뷰 수 정렬
export default function ProfileSort({closeModal, setSelectSort, setSorting}){

    const onSelectChange=(e)=>{
        console.log(e.target.value)
        setSelectSort( e.target.value);
        const selectedSorting = e.target.innerText;
        setSorting(selectedSorting);
    }; 

    return(
        <div id="modal-scrollable" className="modal-scrollable">
            <button onClick={closeModal}>Close Modal</button>
                <p>정렬</p>
                <hr className='sortingline'/>
                <button value={"latest"} onClick={onSelectChange} className='sortingbutton'>최신순</button>
                <hr className='sortingline'/>
                <button value={"manyReview"} onClick={onSelectChange} className='sortingbutton'>리뷰 개수 순</button>
                <hr className='sortingline'/>
                <button value={"highScore"} onClick={onSelectChange} className='sortingbutton'>평점 높은 순</button>
            </div>
    )
}