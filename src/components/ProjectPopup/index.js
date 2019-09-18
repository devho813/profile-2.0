import React, { memo, useState, useCallback } from 'react';
import {
  ProjectDetail,
  DetailWrapper,
  DetailLeft,
  DetailRight,
  ImageWrapper,
  Images,
  LeftArrow,
  RightArrow,
  GotoSite,
  Icon,
  DetailHeader,
  DetailTech,
  HashSymbol
} from './style';
import PropTypes from 'prop-types';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectPopup = memo(({project, children}) => {
  const { imagePaths, siteLink, githubLink, environment, title, year, position, technologies } = project;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onClickArrow = useCallback((direction) => () => {
    if(direction === 'left'){
      setCurrentImageIndex(prevState => {
        if(prevState === 0){
          return imagePaths.length - 1;
        }
        return prevState - 1;
      })
    }else if(direction === 'right'){
      setCurrentImageIndex(prevState => {
        if(prevState === imagePaths.length - 1){
          return 0;
        }
        return prevState + 1;
      })
    }else{
      alert('잘못된 방향!');
    }
  }, []);

  return (
    <ProjectDetail>
      <DetailWrapper>
        <DetailLeft>
          <ImageWrapper>
            <Images src={imagePaths[currentImageIndex]}/>
            <LeftArrow onClick={onClickArrow('left')}></LeftArrow>
            <RightArrow onClick={onClickArrow('right')}></RightArrow>
          </ImageWrapper>
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
});

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

ProjectPopup.displayName = 'ProjectPopup';
export default ProjectPopup;