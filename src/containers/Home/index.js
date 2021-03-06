import React, {useMemo, useCallback, useRef, memo} from 'react'
import { useSelector } from 'react-redux';
import { FirstName, LastName, HomeContainer, HomeWrapper, SubWrapper, Name, JobNameWrapper, BaseIn, ScrollDown } from './style';
import throttle from 'lodash/throttle';
import Proptypes from 'prop-types';

const Home = memo(({LoadingDuration}) => {
  const { firstName, lastName, jobNames, basedIn } = useSelector(state => state.me);
  const homeWrapperRef = useRef();

  const getJobNames = useMemo(() => {
    return jobNames.map((job, index) => {
      return (
        <span key={job}>
          {index > 0 && <span className="ampersand">&</span>}{job}
        </span>
      )
    })
  }, [jobNames]);

  const setBackgroundMove = useCallback(
    throttle((e) => {
      homeWrapperRef.current.style.backgroundPosition = `
        ${Math.ceil((window.innerWidth / 2 - e.clientX) * 0.18) * -1}px
        ${Math.ceil((window.innerHeight / 2 - e.clientY) * 0.18) * -1}px
      `
    }, 100)
  , []);

  // e -> Object Pool
  const onMouseMove = useCallback((e) => {
    e.persist();
    setBackgroundMove(e);
  }, [])

  return (
    <HomeContainer>
      <HomeWrapper
        onMouseMove={onMouseMove}
        ref={homeWrapperRef}
        LoadingDuration={LoadingDuration}>
        <SubWrapper>
          <Name>
            Hi! I&#39;m &nbsp;
              <strong>
              <FirstName>{firstName}</FirstName>
              <LastName>{lastName}.</LastName>
            </strong>
          </Name>
          <JobNameWrapper>
            {getJobNames}
          </JobNameWrapper>
          <BaseIn>based in <span className="detail-address">{basedIn}.</span></BaseIn>
        </SubWrapper>
        <ScrollDown></ScrollDown>
      </HomeWrapper>
    </HomeContainer>
  )
});

Home.propTypes = {
  LoadingDuration: Proptypes.number.isRequired
}

Home.displayName = 'Home';
export default Home;
