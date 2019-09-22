import React, { memo, useState, useCallback, useRef } from 'react';
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
  const sections = useSelector(store => store.section.sections);
  const navIconRef = useRef();

  const onClickNavIcon = useCallback(() => {
    if(!extendNavigation){
      setExtendNavigation(true);
    }else{
      setExtendNavigation(false);
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
        extend={extendNavigation}>
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