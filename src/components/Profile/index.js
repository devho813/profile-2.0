import React, {useState, useEffect, useRef} from 'react';
import ProfileLoading from '../ProfileLoading';
import MainHeader from '../../containers/MainHeader';
import AboutMe from '../../containers/AboutMe';
import Technologie from '../../containers/Technologie';

const Profile = () => {
  const [showProfileLoading, setShowProfileLoading] = useState(true);
  const timer = useRef();

  useEffect(() => {
    timer.current = setTimeout(() => {
      setShowProfileLoading(false);
    }, 5000)

    return () => {
      clearTimeout(timer.current);
    }
  }, [])
  
  return (
    <>
      {showProfileLoading && <ProfileLoading />}
      {!showProfileLoading && 
        <>
          <MainHeader />
          <AboutMe />
          <Technologie />
        </>
      }
    </>
  )
}

export default Profile;