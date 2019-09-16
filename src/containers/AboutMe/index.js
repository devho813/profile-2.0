import React, {useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SectionWrapper, SectionContent, DecoBar, ContactInfoTitle, ContactInfoList} from './style';
import ContactInfoItem from '../../components/ContactInfoItem';
import { SECTION_POSITION_UPDATE } from '../../reducers/section';

const AboutMe = () => {
  const {aboutMe, contactInfos} = useSelector(store => store.me);
  const dispatch = useDispatch();
  const positionRef = useRef();
  
  useEffect(() => {
    dispatch({
      type: SECTION_POSITION_UPDATE,
      id: 2,
      data: positionRef.current.offsetTop
    })
  }, []);

  return (
    <SectionWrapper ref={positionRef}>
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
