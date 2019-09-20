import React, { memo, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SectionWrapper, SectionTitle, DecoBar, SectionContent } from './style';
import Project from '../../components/Project'
import { SECTION_POSITION_UPDATE } from '../../reducers/section';
import { useInView } from 'react-intersection-observer';
import Fish from '../../components/Fish';

const Portfolio = memo(() => {
  const { projects } = useSelector(store => store.project);
  const dispatch = useDispatch();
  const positionRef = useRef();

  const [sectionTitleRef, sectionTitleInView] = useInView({threshold: 0, triggerOnce: true});

  useEffect(() => {
    dispatch({
      type: SECTION_POSITION_UPDATE,
      id: 4,
      data: positionRef.current.offsetTop
    })
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