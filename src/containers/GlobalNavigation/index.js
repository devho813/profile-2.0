import React, { memo, useState, useCallback, useEffect, useRef, useMemo } from 'react';
import {useSelector} from 'react-redux';
import {
  NavigationWrapper,
  NavigationIcon,
  NavigationContent,
  SectionList,
} from './style';
import Quote from '../Quote';
import {animateScroll as scroll} from 'react-scroll';

const GlobalNavigation = memo(() => {
  const [extendNavigation, setExtendNavigation] = useState(false);
  const [navIconColorChange, setNavIconColorChange] = useState(false);
  const sections = useSelector(store => store.section.sections);
  const navIconRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [extendNavigation])

  const getNavIconColorChangeState = useCallback(() => {
    // 현재 스크롤 세로 위치가 (Home 컴포넌트 높이 - 메뉴 아이콘의 top 값 - 메뉴 아이콘의 높이 / 2) 보다 클 경우
    if (window.scrollY > document.documentElement.clientHeight
      - navIconRef.current.offsetTop - (navIconRef.current.clientHeight / 2)
    ){
      // 변경되어야함
      return true;
    }else{
      // 기존 색상
      return false;
    }
  }, []);

  const onScroll = useCallback(() => {
    if(!extendNavigation){
      setNavIconColorChange(getNavIconColorChangeState());
    }
  }, [extendNavigation]);

  const onClickNavIcon = useCallback(() => {
    if(!extendNavigation){
      setExtendNavigation(true);
      setNavIconColorChange(false);
    }else{
      setExtendNavigation(false);
      setNavIconColorChange(getNavIconColorChangeState());
    }
  }, [extendNavigation])
  
  const onClickSection = useCallback((id) => () => {
    setExtendNavigation(false);
    scroll.scrollTo(sections[id-1].position, {delay: 1000});
  }, [sections]);
  
  return (
    <NavigationWrapper extend={extendNavigation}>
      <NavigationIcon
        ref={navIconRef}
        onClick={onClickNavIcon} 
        extend={extendNavigation}
        navIconColorChange={navIconColorChange}>
          <span></span>
          <span></span>
          <span></span>
      </NavigationIcon>

      <NavigationContent>
        <SectionList extend={extendNavigation}>
          {sections && sections.map(section =>
            <li key={section.id} onClick={onClickSection(section.id)}>{section.name}</li>
          )}
        </SectionList>
        <Quote extendNavigation={extendNavigation}/>
      </NavigationContent>
    </NavigationWrapper>
  )
});

GlobalNavigation.displayName = 'GlobalNavigation';
export default GlobalNavigation;