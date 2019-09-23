import React, {memo, useState, useEffect, useRef} from 'react';
import LoadingPage from '../LoadingPage';
import Home from '../../containers/Home';
import AboutMe from '../../containers/AboutMe';
import Technologie from '../../containers/Technologie';
import Footer from '../../components/Footer';
import Portfolio from '../../containers/Portfolio';
import GlobalNavigation from '../../containers/GlobalNavigation';

const Profile = memo(() => {
  const [showLoadingPage, setShowLoadingPage] = useState(true);
  const LoadingDuration = useRef(3) // 로딩 페이지 지속 시간
  const timer = useRef();

  useEffect(() => {
    timer.current = setTimeout(() => {
      setShowLoadingPage(false);
      window.scrollTo(0, 0);
    }, LoadingDuration.current * 1000 + 2000)

    return () => {
      clearTimeout(timer.current);
    }
  }, [])
  
  return (
    <>
      {/* Home 컴포넌트 배경이미지 로딩 지연으로 인한 loading 페이지 생성 */}
      {showLoadingPage && <LoadingPage LoadingDuration={LoadingDuration.current}/>}
      <GlobalNavigation />
      <Home LoadingDuration={LoadingDuration.current}/>
      {!showLoadingPage && (
        <>
          <AboutMe />
          <Technologie/>
          <Portfolio />
          <Footer /> 
        </>
      )}
    </>
  )
});

Profile.displayName = 'Profile';
export default Profile;