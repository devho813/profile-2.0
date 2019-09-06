import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { SectionWrapper, DecoBar, SectionContent } from './style';
import Project from '../Project'

const Portfolio = memo(() => {
  const { projects } = useSelector(store => store.project);

  return (
    <SectionWrapper>
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