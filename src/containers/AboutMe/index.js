import React from 'react';
import {useSelector} from 'react-redux';
import {AboutMeWrapper, AboutMeContent, DecoBar, ContactInfoList} from './style';
import ContactInfoItem from '../../components/ContactInfoItem';

const AboutMe = () => {
  const {aboutMe, contactInfos} = useSelector(store => store.me);

  return (
    <AboutMeWrapper>
      <h1>
        About me
        <DecoBar></DecoBar>
      </h1>
      <AboutMeContent>
        {aboutMe.split('\n').map(line => 
          line.length > 0 && (<span key={line}>{line}<br /></span>)
        )}
      </AboutMeContent>
      <h2>Want to know more?</h2>
      <ContactInfoList>
        {contactInfos.map(info => 
          <ContactInfoItem key={info[0]} type={info[0]} value={info[1]} />
        )}
      </ContactInfoList>
    </AboutMeWrapper>
  )
}

export default AboutMe;
