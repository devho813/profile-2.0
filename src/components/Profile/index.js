import React, {memo, useState, useEffect, useRef} from 'react';
import LoadingPage from '../LoadingPage';
import MainHeader from '../../containers/MainHeader';
import AboutMe from '../../containers/AboutMe';
import Technologie from '../../containers/Technologie';
import Footer from '../../components/Footer';
import Portfolio from '../../components/Portfolio';

const Profile = memo(() => {
  const [showLoadingPage, setShowLoadingPage] = useState(true);
  const LoadingDuration = useRef(3) // 로딩 페이지 지속 시간
  const timer = useRef();

  useEffect(() => {
    timer.current = setTimeout(() => {
      setShowLoadingPage(false);
    }, LoadingDuration.current * 1000 + 2000)

    return () => {
      clearTimeout(timer.current);
    }
  }, [])
  
  return (
    <>
      {showLoadingPage && <LoadingPage LoadingDuration={LoadingDuration.current}/>}
      {!showLoadingPage && 
        <>
          <MainHeader />
          <AboutMe />
          <Technologie />
          <Portfolio />
          <Footer />
        </>
      }
    </>
  )
});

Profile.displayName = 'Profile';
export default Profile;