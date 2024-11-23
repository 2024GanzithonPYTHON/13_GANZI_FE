import './NavBar.css'

export default function NavBar({ total, limit, page, setPage }){
    const numPages = Math.ceil(total / limit);
    return(
    <>
    <div className='buttonflex'>
      <button className="buttonbackground">
        &lt;
      </button>
      
      <button className="buttonbackground">
        &gt;
      </button>
    </div>
    </>
    )
}