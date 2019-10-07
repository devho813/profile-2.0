import React, { memo, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SectionWrapper, SectionTitle, DecoBar, SectionContent } from './style';
import Project from '../../components/Project'
import { secionPositionUpdate } from '../../modules/section';
import { useInView } from 'react-intersection-observer';
import Fish from '../../components/Fish';

const Portfolio = memo(() => {
  const { projects } = useSelector(state => state.project);
  const dispatch = useDispatch();
  const positionRef = useRef();

  const [sectionTitleRef, sectionTitleInView] = useInView({threshold: 0, triggerOnce: true});

  useEffect(() => {
    dispatch(secionPositionUpdate(4, positionRef.current.offsetTop));
  }, []);


  return (
    <SectionWrapper ref={positionRef}>
      <SectionTitle ref={sectionTitleRef} inView={sectionTitleInView}>
        Portfolio
        <DecoBar></DecoBar>
      </SectionTitle>
      <SectionContent>
        {projects.map(project =>
          <Project key={project.id} project={project}/>
        )}
      </SectionContent>
      <Fish fishId={4}/>
    </SectionWrapper>
  );
});


Portfolio.displayName = 'Portfolio';
export default Portfolio;