import React, { memo, useState, useEffect, useRef, Suspense } from 'react';
import LoadingPage from '../LoadingPage';
import Home from '../../containers/Home';
import GlobalNavigation from '../../containers/GlobalNavigation';

const AboutMe = React.lazy(() => import('../../containers/AboutMe'));
const Technologie = React.lazy(() => import('../../containers/Technologie'));
const Portfolio = React.lazy(() => import('../../containers/Portfolio'));
const Footer = React.lazy(() => import('../../components/Footer'));

const Profile = () => {
  const [showLoadingPage, setShowLoadingPage] = useState(true);
  const LoadingDuration = useRef(3) // 로딩 페이지 지속 시간(초)
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
      {showLoadingPage && <LoadingPage LoadingDuration={LoadingDuration.current} />}
      <GlobalNavigation />
      <Home LoadingDuration={LoadingDuration.current} />
      <Suspense fallback={<div>loading...</div>}>
        {!showLoadingPage && (
          <>
            <AboutMe />
            <Technologie />
            <Portfolio />
            <Footer />
          </>
        )}
      </Suspense>
    </>
  )
};

export default memo(Profile);