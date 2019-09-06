import React, {memo, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import ProjectPopup from '../ProjectPopup';
import { 
  ProjectWrapper,
  ProjectLabel,
  ProjectEnv,
  ProjectImage,
} from './style';

const Project = memo(({project}) => {
  const {title, year, environment, imagePaths} = project;
  const [popupState, setPopupState] = useState(false);

  const onClickProject = useCallback(() => {
    setPopupState(true);
  }, []);
  
  return (
    <ProjectWrapper onClick={onClickProject}>
      <ProjectImage src={imagePaths[0]}/>
      <ProjectLabel>
        <h4>{title}<span>({year})</span></h4>
        <ProjectEnv>{environment}</ProjectEnv>
      </ProjectLabel>
      
      {popupState && <ProjectPopup project={project}/>}
    </ProjectWrapper>
  );
});

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string,
    environment: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    siteLink: PropTypes.string,
    githubLink: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    imagePaths: PropTypes.arrayOf(PropTypes.any).isRequired,
  })
}

Project.displayName = 'Project';
export default Project;