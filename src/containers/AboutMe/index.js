import React, {useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SectionWrapper, SectionContiner, SectionTitle, SectionContent, DecoBar, ContactInfoTitle, ContactInfoList} from './style';
import ContactInfoItem from '../../components/ContactInfoItem';
import { SECTION_POSITION_UPDATE } from '../../reducers/section';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
  const {aboutMe, contactInfos} = useSelector(store => store.me);
  const dispatch = useDispatch();
  const positionRef = useRef();
  
  const [sectionTitleRef, sectionTitleInView] = useInView({threshold: 1, triggerOnce: true});
  
  useEffect(() => {
    dispatch({
      type: SECTION_POSITION_UPDATE,
      id: 2,
      data: positionRef.current.offsetTop
    })
  }, []);

  return (
    <SectionWrapper ref={positionRef}>
      <SectionContiner ref={sectionTitleRef} inView={sectionTitleInView}>
        <SectionTitle>
          About me
          <DecoBar></DecoBar>
        </SectionTitle>
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
      </SectionContiner>
    </SectionWrapper>
  )
}

export default AboutMe;
