import React, {memo, useState, useCallback} from 'react';
import { NavigationWrapper, NavigationIcon } from './style';

const GlobalNavigation = memo(() => {
  const [extendNavigation, setExtendNavigation] = useState(false);

  const onClickNavIcon = useCallback(() => {
    setExtendNavigation(prevState => !prevState);
  }, [])

  return (
    <NavigationWrapper extend={extendNavigation}>
      <NavigationIcon onClick={onClickNavIcon} extend={extendNavigation}>
        <span></span>
        <span></span>
        <span></span>
      </NavigationIcon>
    </NavigationWrapper>
  )
});

GlobalNavigation.displayName = 'GlobalNavigation';
export default GlobalNavigation;