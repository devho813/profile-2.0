import React, {memo, useState, useCallback} from 'react';
import {
  ImageWrapper,
  Images,
  LeftArrow,
  RightArrow,
} from './style';
import PropTypes from 'prop-types';

const ProjectImage = ({imagePaths}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onClickArrow = useCallback(direction => () => {
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
    <ImageWrapper>
      <Images src={imagePaths[currentImageIndex]} />
      <LeftArrow onClick={onClickArrow('left')} />
      <RightArrow onClick={onClickArrow('right')} />
    </ImageWrapper>
  );
};

ProjectImage.propTypes = {
  imagePaths: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default memo(ProjectImage);