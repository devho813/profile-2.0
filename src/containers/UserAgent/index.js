import React, {useState, useEffect, useCallback, memo} from 'react';
import styled from 'styled-components';

const UserAgentWrapper = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
  color: white;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.9rem;
`

const SupportCircle = styled.span`
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  margin: 0 5px 0 10px;
  border-radius: 50%;
  background-color: ${({support}) => support ? 'lightgreen': 'yellow'};
`

const UserAgent = memo(() => {
  const [browser, setBrowser] = useState({info: "", support: true}); // 브라우저 정보
  const [resolution, setResolution] = useState({info: "", support: true}); // 해상도

  useEffect(() => {
    getBrowserInfo();
    getResolutuonInfo();
  }, []);

  const getBrowserInfo = useCallback(() => {
    let agent = navigator.userAgent, match;
    let app, version;

    if((match = agent.match(/MSIE ([0-9]+)/)) || (match = agent.match(/Trident.*rv:([0-9]+)/))) app = 'Internet Explorer';
    else if(match = agent.match(/Edge\/([0-9]+)/)) app = 'Edge';
    else if(match = agent.match(/Chrome\/([0-9]+)/)) app = 'Chrome';
    else if(match = agent.match(/Firefox\/([0-9]+)/)) app = 'Firefox';
    else if(match = agent.match(/Safari\/([0-9]+)/)) app = 'Safari';
    else if((match = agent.match(/OPR\/([0-9]+)/)) || (match = agent.match(/Opera\/([0-9]+)/))) app = 'Opera';
    else app = 'Unknown';
    if(app !== 'Unknown') version = match[1];
    
    //  IE 10버전 이하를 제외한 나머지 브라우저 버전 지원
    if (app === "Internet Explorer" && version <= 10) {
      console.log("IE 10이하 버전");
      setBrowser(prevState => ({
        ...prevState,
        support: false
      }));
    }else{
      setBrowser({info: `${app} ${version}`, support: true})
    }

  }, [])
  const getResolutuonInfo = useCallback(() => {
    const {width, height} = screen;
    let support = true;

    if(width > 1920){
      support = false;
    }

    setResolution({info: width+" X "+height, support})
  }, [])


  return (
    <UserAgentWrapper>
      <SupportCircle support={browser.support}/>{browser.info}
      <SupportCircle support={resolution.support}/>{resolution.info}
    </UserAgentWrapper>
  );
});


UserAgent.displayName = 'UserAgent';
export default UserAgent;