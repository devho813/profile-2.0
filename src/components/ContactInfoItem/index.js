import React, { memo, useState, useEffect, useCallback } from 'react';
import {ContactInfoPopup} from '../../containers/AboutMe/style';
import phone from '../../assets/images/icon/icon_phone.svg';
import gmail from '../../assets/images/icon/icon_gmail.svg';
import github from '../../assets/images/icon/icon_github.svg';
import kakaoTalk from '../../assets/images/icon/icon_kakaotalk.png';

const ContactInfoItem = memo(({ type, value }) => {
  const [imageURL, setImageURL] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // eval, new Function 적용안되는 문제
    switch(type){
      case 'phone':
        setImageURL(phone);
        break;
      case 'github':
        setImageURL(github)
        break;
      case 'gmail':
        setImageURL(gmail)
        break;
      case 'kakaoTalk':
        setImageURL(kakaoTalk)
        break;
    }
  }, [])
  
  const onMouseEnter = useCallback(() => {
    setShowPopup(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setShowPopup(false);
  }, []);

  return (
    <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <img src={imageURL} alt={type}/>
      <ContactInfoPopup showPopup={showPopup}>
        <span>
          {type !== 'github' ? value : <a target="_blank" href={value}>{value}</a>}
        </span>
      </ContactInfoPopup>
    </li>
  )
});

ContactInfoItem.displayName = 'ContactInfoItem';
export default ContactInfoItem;
