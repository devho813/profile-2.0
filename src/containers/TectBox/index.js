import React, { memo, useState, useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { TechBoxContainer, TechImage, TechContent, BackgroundBlack, TechContent2 } from './style';
import { activeTechnologieRequest, leaveTechnologieRequest } from '../../modules/me';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { PopupClose } from '../../components/Project/style';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const TechBox = memo(({ techId, techName, description }) => {
  const [activeState, setActiveState] = useState(null); // 해당 technologie 활성 상태
  const allTechActiveState = useSelector(state => state.me.allTechActiveState); // 전체 technologie 활성 상태
  const dispatch = useDispatch();

  const [techBoxRef, techBoxInView] = useInView({threshold: 1, triggerOnce: true});
  
  const onShowTechContent = useCallback(() => {
    setActiveState(true);
    dispatch(activeTechnologieRequest());
  }, []);
  const onHideTechContent = useCallback(() => {
    setActiveState(false);
    dispatch(leaveTechnologieRequest());
  }, []);

  return (
    <>
      <TechBoxContainer
        activeState={activeState}
        allTechActiveState={allTechActiveState}
        techId={techId}
        onMouseEnter={onShowTechContent}
        onMouseLeave={onHideTechContent}>
          <TechImage 
            techId={techId}
            ref={techBoxRef} inView={techBoxInView}
            src={require('../../assets/images/logo/logo_' + techName + '.svg')}
          />
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
      <BackgroundBlack activeState={activeState}>
        {activeState && 
          (<TechContent2>
            {description.split('\n').map(line =>
              line.length > 0 && (<span key={line}>{line}<br /></span>)
            )}
            <PopupClose icon={faTimes} onClick={onHideTechContent}/>
          </TechContent2>)
        }
      </BackgroundBlack>
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
