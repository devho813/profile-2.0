import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { FirstName, LastName, MainHeaderContainer, MainHeaderWrapper, SubWrapper, Name, JobNameWrapper, BaseIn, ScrollDown } from './style';
import GlobalNavigation from '../../components/GlobalNavigation';

const MainHeader = () => {
  const { firstName, lastName, jobNames, basedIn } = useSelector(store => store.me);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainHeaderContainer>
      <MainHeaderWrapper>
        <GlobalNavigation />
        <SubWrapper>
          <Name>
            Hi! I&#39;m &nbsp;
            <strong>
              <FirstName>{firstName}</FirstName>
              <LastName>{lastName}.</LastName>
            </strong>
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
    </MainHeaderContainer>
  )
}

export default MainHeader;
