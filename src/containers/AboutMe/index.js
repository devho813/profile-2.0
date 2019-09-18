import React, {useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SectionWrapper, SectionTitle, SectionContent, DecoBar, ContactInfoTitle, ContactInfoList} from './style';
import ContactInfoItem from '../../components/ContactInfoItem';
import { SECTION_POSITION_UPDATE } from '../../reducers/section';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
  const {aboutMe, contactInfos} = useSelector(store => store.me);
  const dispatch = useDispatch();
  const positionRef = useRef();
  
  const [sectionTitleRef, sectionTitleInView] = useInView({threshold: 1, triggerOnce: true});
  const [sectionContentRef, sectionContentInView] = useInView({threshold: 1, triggerOnce: true});
  const [contactTitleRef, contactTitleInView] = useInView({threshold: 1, triggerOnce: true});
  const [contactListRef, contactListInView] = useInView({threshold: 1, triggerOnce: true});
  
  useEffect(() => {
    dispatch({
      type: SECTION_POSITION_UPDATE,
      id: 2,
      data: positionRef.current.offsetTop
    })
  }, []);

  return (
    <SectionWrapper ref={positionRef}>
        <SectionTitle ref={sectionTitleRef} inView={sectionTitleInView}>
          About me
          <DecoBar></DecoBar>
        </SectionTitle>
        <SectionContent ref={sectionContentRef} inView={sectionContentInView}>
          {aboutMe.split('\n').map(line => 
            line.length > 0 && (<span key={line}>{line}<br /></span>)
          )}
        </SectionContent>
        <ContactInfoTitle ref={contactTitleRef} inView={contactTitleInView}>
          Want to know more?
        </ContactInfoTitle>
        <ContactInfoList ref={contactListRef} inView={contactListInView}>
          {contactInfos.map(info => 
            <ContactInfoItem key={info[0]} type={info[0]} value={info[1]} />
          )}
        </ContactInfoList>
    </SectionWrapper>
  )
}

export default AboutMe;
