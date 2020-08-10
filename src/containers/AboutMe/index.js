import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SectionWrapper, SectionTitle, SectionContent, DecoBar, ContactInfoTitle, ContactInfoList } from './style';
import ContactInfoItem from '../../components/ContactInfoItem';
import { secionPositionUpdate } from '../../modules/section';
import { useInView } from 'react-intersection-observer';
import Fish from '../../components/Fish';

const AboutMe = () => {
  const { aboutMe, contactInfos } = useSelector(state => state.me);
  const dispatch = useDispatch();
  const positionRef = useRef();

  const [sectionTitleRef, sectionTitleInView] = useInView({ threshold: 1, triggerOnce: true });
  const [sectionContentRef, sectionContentInView] = useInView({ threshold: 1, triggerOnce: true });
  const [contactTitleRef, contactTitleInView] = useInView({ threshold: 1, triggerOnce: true });
  const [contactListRef, contactListInView] = useInView({ threshold: 1, triggerOnce: true });

  useEffect(() => {
    setTimeout(() => {
      dispatch(secionPositionUpdate(2, positionRef.current.offsetTop));
    });
  }, []);

  return (
    <SectionWrapper ref={positionRef}>
      <Fish fishId={1} />
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
      <Fish fishId={2} />
    </SectionWrapper>
  )
}

export default AboutMe;
