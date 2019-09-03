import React, { memo, useEffect, useCallback, useState } from 'react'
import { FooterWrapper, BackToTop, Copyright } from './style';
import {animateScroll as scroll} from 'react-scroll';

const Footer = memo(() => {
  const [backToTopState, setBackToTopState] = useState(false); // true, false, bottom

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [])

  const onScroll = useCallback(() => {
    if(window.scrollY > 170){
      setBackToTopState(true);
    }else{
      setBackToTopState(false);
    }
  }, []);
  
  const onClickBackToTop = useCallback(() => {
    scroll.scrollToTop({duration: 800});
  }, []);
  
  return (
    <FooterWrapper>
      <BackToTop backToTopState={backToTopState} onClick={onClickBackToTop}/>
      <Copyright>© 2019. Chanho Lee. All Rights reserved.</Copyright>
    </FooterWrapper>
  )
});

Footer.displayName = 'Footer';
export default Footer;