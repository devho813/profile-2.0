import React, { memo } from 'react';
import {
  ProjectDetail,
  DetailWrapper,
  DetailLeft,
  DetailRight,
  GotoSite,
  Icon,
  DetailHeader,
  DetailTech,
  HashSymbol
} from './style';
import PropTypes from 'prop-types';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ProjectImage from '../../containers/ProjectImage';

const ProjectPopup = ({project, children}) => {
  const { imagePaths, siteLink, githubLink, environment, title, year, position, technologies } = project;

  return (
    <ProjectDetail>
      <DetailWrapper>
        <DetailLeft>
          <ProjectImage imagePaths={imagePaths}/>
          <GotoSite>
            {siteLink && <a href={siteLink} target={'_blank'}><Icon icon={faExternalLinkAlt}/></a>}
            {githubLink && <a href={githubLink} target={'_blank'}><Icon icon={faGithub}/></a>}
          </GotoSite>
        </DetailLeft>
        <DetailRight>
          <DetailHeader>{title} ({year})</DetailHeader>
          <li>· {environment}</li>
          <li>· {position}</li>
          <DetailTech>
            <h4>사용 기술</h4>
            {technologies.map(tech => 
              <span key={tech}>
                <HashSymbol>#</HashSymbol>{tech}
              </span>
            )}
          </DetailTech>
        </DetailRight>
        <div style={{clear: 'both'}}></div>
        {children}
      </DetailWrapper>
    </ProjectDetail>
  );
};

ProjectPopup.propTypes = {
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
export default memo(ProjectPopup);