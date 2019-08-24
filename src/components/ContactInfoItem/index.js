import React, { memo, useState, useEffect } from 'react';
import {ContactInfoPopup} from '../../containers/AboutMe/style';
import phone from '../../assets/images/icon/icon_phone.png';
import gmail from '../../assets/images/icon/icon_gmail.png';
import github from '../../assets/images/icon/icon_github.png';
import kakaoTalk from '../../assets/images/icon/icon_kakaotalk.png';

const ContactInfoItem = memo(({ type, value }) => {
  const [imageURL, setImageURL] = useState(null);

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
  

  return (
    <li>
      <img src={imageURL} alt={type}/>
      <ContactInfoPopup>
        
      </ContactInfoPopup>
    </li>
  )
});

ContactInfoItem.displayName = 'ContactInfoItem';
export default ContactInfoItem;
