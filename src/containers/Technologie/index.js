import React from 'react';
import {useSelector} from 'react-redux';
import { SectionWrapper, DecoBar, SectionContent, TechBoxWrapper } from './style';
import TechBox from '../../components/TectBox';


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