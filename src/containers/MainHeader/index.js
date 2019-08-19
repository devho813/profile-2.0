import React from 'react'
import { useSelector } from 'react-redux';
import { MainHeaderWrapper, SubWrapper, Name, JobNameWrapper, BaseIn, ScrollDown } from './style';

const MainHeader = () => {
  const { name, jobNames, basedIn } = useSelector(store => store.me);

  return (
    <MainHeaderWrapper>
      <SubWrapper>
        <Name>
          Hi! I&#39;m <strong>{name}.</strong>
        </Name>
        <JobNameWrapper>
          {jobNames.map((job, index) => {
            return (
              <span key={job}>
                {job}{jobNames.length - 1 !== index && <span className="ampersand">&</span>}
              </span>
            )
          })}
        </JobNameWrapper>
        <BaseIn>based in <span className="detail-address">{basedIn}.</span></BaseIn>
      </SubWrapper>
      <ScrollDown></ScrollDown>
    </MainHeaderWrapper>
  )
}

export default MainHeader;
