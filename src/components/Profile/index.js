import React, {useState, useEffect, useRef} from 'react';
import ProfileLoading from '../ProfileLoading';
import MainHeader from '../../containers/MainHeader';

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
      {!showProfileLoading && <MainHeader />}
    </>
  )
}

export default Profile;