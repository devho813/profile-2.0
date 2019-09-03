import React, { memo, useState, useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { TechBoxContainer, TechImage, TechContent, BackgroundBlack } from './style';
import { ACTIVE_TECHNOLOGIE_REQUEST, LEAVE_TECHNOLOGIE_REQUEST } from '../../reducers/me';
import PropTypes from 'prop-types';

const TechBox = memo(({ techId, techName, description }) => {
  const [activeState, setActiveState] = useState(null); // 해당 technologie 활성 상태
  const allTechActiveState = useSelector(store => store.me.allTechActiveState); // 전체 technologie 활성 상태
  const dispatch = useDispatch();
  
  const onMouseEnterTechBox = useCallback(() => {
    setActiveState(true);
    dispatch({type: ACTIVE_TECHNOLOGIE_REQUEST});
  }, [])
  const onMouseLeaveTechBox = useCallback(() => {
    setActiveState(false);
    dispatch({type: LEAVE_TECHNOLOGIE_REQUEST});
  }, [])

  return (
    <>
      <TechBoxContainer
        activeState={activeState}
        allTechActiveState={allTechActiveState}
        techId={techId}
        onMouseEnter={onMouseEnterTechBox}
        onMouseLeave={onMouseLeaveTechBox}>
          <TechImage src={require('../../assets/images/logo/logo_' + techName + '.svg')}/>
          <TechContent>
            <div className="hint-content">
              <p>
                {description.split('\n').map(line => 
                  line.length > 0 && (<span key={line}>{line}<br /></span>)
                )}
              </p>
            </div>
          </TechContent>
      </TechBoxContainer>
      <BackgroundBlack activeState={activeState}></BackgroundBlack>
    </>
  )
});


TechBox.propTypes = {
  techId: PropTypes.number.isRequired,
  techName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

TechBox.displayName = 'TechBox';
export default TechBox;