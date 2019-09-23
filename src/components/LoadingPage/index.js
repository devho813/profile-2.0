import React, {memo} from 'react'
import { LoadingContainer, LoadingWrapper, FullNameLoading, ProgressBar } from './style';
import UserAgent from '../../containers/UserAgent';

const LoadingPage = memo(({LoadingDuration}) => {
  return (
    <LoadingContainer>
      <LoadingWrapper LoadingDuration={LoadingDuration}>
        <div className="loading-wrapper">
          <FullNameLoading>
            <span>C</span>
            <span>h</span>
            <span>a</span>
            <span>n</span>
            <span>h</span>
            <span>o</span>
            <span></span>
            <span className="last-name">Lee</span>
          </FullNameLoading>
          <ProgressBar LoadingDuration={LoadingDuration}>
            <div></div>
          </ProgressBar>
        </div>
      </LoadingWrapper>
      <UserAgent />
    </LoadingContainer>
  )
});

LoadingPage.displayName = 'LoadingPage';
export default LoadingPage;