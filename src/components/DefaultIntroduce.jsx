import './DefaultIntroduce.css'
// 지역, 닉네임, 키워드 등 
export default function DefaultIntroduce({i}){
    return(
        <div className="firstIntro">
            <div className="profilephoto">
                <img src={i.img} alt="man" className="introduceimg"/>
            </div>
            <div className="inline">
                <p className="name">{i.user}</p>
                
                <p className="place">⚫   서울시 서초구</p>

                <div className="boxbox">
                    <div className="box">{i.gKeyword}</div>
                    <div className="box">{i.add}</div>
                </div>

                <div>
                    <div className="box">{i.wKeyword}</div>
                    <div className="box">{i.gender}</div>
                </div>
            </div>
        </div>
    )
}