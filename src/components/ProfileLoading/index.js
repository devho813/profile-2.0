import React from 'react'
import { LoadingWrapper, FullNameLoading, ProgressBar } from './style';

const ProfileLoading = () => {
  return (
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
  )
}

export default ProfileLoading;