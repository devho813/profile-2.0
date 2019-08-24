import React from 'react'
import { LoadingContainer, LoadingWrapper, FullNameLoading, ProgressBar } from './style';

const ProfileLoading = () => {
  return (
    <LoadingContainer>
      <LoadingWrapper>
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
          <ProgressBar>
            <div></div>
          </ProgressBar>
        </div>
      </LoadingWrapper>
    </LoadingContainer>
  )
}

export default ProfileLoading;