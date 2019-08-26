import React from 'react';
import {useSelector} from 'react-redux';
import { SectionWrapper, DecoBar, SectionContent, TechBoxWrapper, TechBox } from './style';

const Technologie = () => {
  const technologies = useSelector(store => store.me.technologies);

  return (
    <SectionWrapper>
      <h1>
        Technologie
        <DecoBar></DecoBar>
      </h1>
      <SectionContent>
        <TechBoxWrapper>
          {technologies.map(techName => 
            <TechBox key={techName} techName={techName} />
          )}
        </TechBoxWrapper>
      </SectionContent>
    </SectionWrapper>
  )
}

export default Technologie;
