import './PersonalProfile.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 메인 페이지 프로필 각각
export default function PersonalProfile({
    memberId,
    nickname,
    gender,
    talent,
    comment,
}) {
  
    const [genderImg, setGenderImg] = useState('/man.png');

    const genderImage = () => {
        if (gender === 'MALE') {
            setGenderImg('/man.png');
        } else {
            setGenderImg('/female.png');
        }
    };

    useEffect(() => {
        genderImage();
    }, [gender]);

    return (
        <Link to={`/Profilepage/${memberId}`} key={memberId} style={{ textDecoration: 'none' }}>
            <div className='personalbox alink'>
                <img src={genderImg} alt="사진" />
                <p className='boldname textcenter'>{nickname} {talent}</p>
    
                <p className='textcenter'>{comment}</p>
            </div>
        </Link>
    );
}
