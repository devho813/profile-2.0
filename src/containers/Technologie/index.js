import React, {useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { SectionWrapper, DecoBar, SectionContent, TechBoxWrapper } from './style';
import TechBox from '../TectBox';
import { SECTION_POSITION_UPDATE } from '../../reducers/section';

const Technologie = () => {
  const technologies = useSelector(store => store.me.technologies);
  const dispatch = useDispatch();
  const positionRef = useRef();

  useEffect(() => {
    dispatch({
      type: SECTION_POSITION_UPDATE,
      id: 3,
      data: positionRef.current.offsetTop
    })
  }, []);
  
  return (
    <SectionWrapper ref={positionRef}>
      <h1>
        Technologie
        <DecoBar></DecoBar>
      </h1>
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