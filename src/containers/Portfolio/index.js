import React, { memo, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SectionWrapper, DecoBar, SectionContent } from './style';
import Project from '../../components/Project'
import { SECTION_POSITION_UPDATE } from '../../reducers/section';

const Portfolio = memo(() => {
  const { projects } = useSelector(store => store.project);
  const dispatch = useDispatch();
  const positionRef = useRef();

  useEffect(() => {
    dispatch({
      type: SECTION_POSITION_UPDATE,
      id: 4,
      data: positionRef.current.offsetTop
    })
  }, []);

  return (
    <SectionWrapper ref={positionRef}>
      <h1>
        Portfolio
        <DecoBar></DecoBar>
      </h1>
      <SectionContent>
        {projects.map(project =>
          <Project key={project.id} project={project}/>
        )}
      </SectionContent>
    </SectionWrapper>
  );
});


Portfolio.displayName = 'Portfolio';
export default Portfolio;