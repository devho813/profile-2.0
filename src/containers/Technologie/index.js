import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SectionWrapper, SectionTitle, DecoBar, SectionContent, TechBoxWrapper } from './style';
import TechBox from '../TectBox';
import { secionPositionUpdate } from '../../modules/section';
import { useInView } from 'react-intersection-observer'
import Fish from '../../components/Fish';

const Technologie = () => {
  const technologies = useSelector(state => state.me.technologies);
  const dispatch = useDispatch();
  const positionRef = useRef();

  const [sectionTitleRef, sectionTitleInView] = useInView({ threshold: 1, triggerOnce: true });

  useEffect(() => {
    setTimeout(() => {
      dispatch(secionPositionUpdate(3, positionRef.current.offsetTop));
    });
  }, []);

  return (
    <SectionWrapper ref={positionRef}>
      <Fish fishId={3} />
      <SectionTitle ref={sectionTitleRef} inView={sectionTitleInView}>
        Technologie
        <DecoBar></DecoBar>
      </SectionTitle>
      <SectionContent>
        <TechBoxWrapper>
          {technologies.map((technologie) => {
            return (
              <TechBox key={technologie.id}
                techId={technologie.id}
                techName={technologie.techName}
                description={technologie.description}>
              </TechBox>
            )
          })}
        </TechBoxWrapper>
      </SectionContent>
    </SectionWrapper>
  )
}

export default Technologie;