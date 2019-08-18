import React from 'react'
import {useSelector} from 'react-redux';
import {MainHeaderWrapper} from './style';

const MainHeader = () => {
  const {name, jobNames, basedIn} = useSelector(store => store.me);

  return (
    <MainHeaderWrapper>
      Hi! I`m {name}. 
      FRONT-END DEVELOPER & JAVASCRIPT DEVELOPER <span>based in {basedIn}.</span>
    </MainHeaderWrapper>
  )
}

export default MainHeader;
