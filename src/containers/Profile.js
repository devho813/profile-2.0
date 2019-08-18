import React, {useState, useEffect, useRef} from 'react';
import ProfileLoading from '../components/ProfileLoading';

const Profile = () => {
  const [showProfileLoading, setShowProfileLoading] = useState(true);
  const timer = useRef();

  useEffect(() => {
    timer.current = setTimeout(() => {
      setShowProfileLoading(false);
    }, 3500)

    return () => {
      clearTimeout(timer.current);
    }
  }, [])
  
  return (
    <>
      {showProfileLoading && <ProfileLoading />}
    </>
  )
}

export default Profile;