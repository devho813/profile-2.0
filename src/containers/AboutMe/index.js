import React from 'react';
import {useSelector} from 'react-redux';
import {SectionWrapper, SectionContent, DecoBar, ContactInfoTitle, ContactInfoList} from './style';
import ContactInfoItem from '../../components/ContactInfoItem';

const AboutMe = () => {
  const {aboutMe, contactInfos} = useSelector(store => store.me);

  return (
    <SectionWrapper>
      <h1>
        About me
        <DecoBar></DecoBar>
      </h1>
      <SectionContent>
        {aboutMe.split('\n').map(line => 
          line.length > 0 && (<span key={line}>{line}<br /></span>)
        )}
      </SectionContent>
      <ContactInfoTitle>Want to know more?</ContactInfoTitle>
      <ContactInfoList>
        {contactInfos.map(info => 
          <ContactInfoItem key={info[0]} type={info[0]} value={info[1]} />
        )}
      </ContactInfoList>
    </SectionWrapper>
  )
}

export default AboutMe;
