import { useNavigate } from "react-router-dom"
import Modal from 'react-modal';
import { useState } from "react";

export default function ChatingHeader({chatInfo}){
    const [ TtCompleted, setTtCompleted ] =useState(false);

    const onClickTtButton = () =>{
        setTtCompleted(true)
        openModal3()
    }

    let navigate = useNavigate()

    const [isOpen3, setIsOpen3] = useState(false);

    const openModal3 = () => setIsOpen3(true);
    const closeModal3 = () => setIsOpen3(false);
    return(
        <div className="PageHeader">
        <div className="HeaderDiv">
            <img onClick={()=>{ navigate(-1) }}
                style={{width:30, height:30,marginLeft:40, marginRight:33}}
                id="BackButton"
                src={`${process.env.PUBLIC_URL}/images/BackButton.svg`}
                alt="BackButton"
            />
            <div className="HeaderCenter jljl HeaderName" style={{width:100, height:48, fontSize:20, fontWeight:400, marginTop:40}}>
                <p style={{margin:"auto", justifyItems:"center", alignItems:"center"}}>{chatInfo.roomId}</p>
                <div className="glgl" style={{margin:"auto"}}>
                    <p style={{fontSize:13, fontWeight:700, margin:2}}>IT</p><p style={{fontSize:13, fontWeight:700, margin:2}}>|</p><p style={{fontSize:13, fontWeight:700, margin:2}}>백엔드</p>
                </div>
            </div>
            <button onClick={onClickTtButton} className="talentTradeButton" style={{width:66, height:68, marginRight:40, backgroundColor: TtCompleted ? "#4A628A" : "#7AB2D3"}} ><p style={{margin:0}}>재능</p> <p style={{margin:0}}>교환</p> <p style={{margin:0}}>성사</p></button>


            <Modal
                    isOpen={isOpen3}
                    onRequestClose={closeModal3}
                    contentLabel="Example Modal"
                    overlayClassName="talentoverlay"
                    className="talentmodal">
                    <div id="modal-scrollable" className="modal-scrollable modalFlex">
                        <img style={{marginTop:10}}id="Check" src={`${process.env.PUBLIC_URL}/images/CheckCircle(1).svg`} alt="Check"/>
                        <div>
                            <p style={{fontSize:20}}>재능 교환 성사 완료!</p>
                            <p style={{fontSize:13, fontWeight:300, marginBottom:0}}>재능 교환 성사 시 최초 이용 요금 </p>
                            <p style={{fontSize:13, margin:0, fontWeight:300}}>5,000원이 발생해요.</p>
                            <p style={{fontSize:13, fontWeight:300, marginBottom:0}}>영업일 기준 1일 이내 카카오톡으로 </p>
                            <p style={{fontSize:13,  margin:0, fontWeight:300}}>안내사항을 전달드릴 예정이에요.</p>

                            <p style={{fontSize:13, fontWeight:300, marginBottom:0}}>앞으로 나아가는 당신의 열정을 </p>
                            <p style={{fontSize:13, margin:0, fontWeight:300}}>응원할게요!</p>
                            
                        </div>
                        <button onClick={closeModal3} className="TtCheckButton">확인</button>
                    </div>
            </Modal>


    
        </div>
        <hr style={{marginTop:110}}/>
        </div>
    )
}