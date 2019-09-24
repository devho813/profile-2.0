import styled from 'styled-components';
import HomeBackgroundImage from "../../assets/images/home_background.png";
import { MainColor, media } from '../../GlobalStyle';

export const HomeContainer = styled.header`
  width: 100%;
  height: 100vh;
  background-color: #8280AB;
  overflow: hidden;
`;

export const HomeWrapper = styled.div`
  position: relative;
  width: 120%;
  height: 120%;
  left: -10%;
  top: -10%;  
  color: white;
  background: rgba(0,0,0,0.4) url(${HomeBackgroundImage});
  background-size: 100% 110vh;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  
  /* IE 10 and 11 */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    background: url(${HomeBackgroundImage});
    background-size: 100% 110vh;
    background-repeat: no-repeat;

    &::before{
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background: rgba(0,0,0,0.4);
    }
  }

  transition: background-position 1s ease-out;

  animation: ${({LoadingDuration}) => `HomeShowAnim 2s ${LoadingDuration+2}s ease forwards`};
  @keyframes HomeShowAnim {
    0%{
      transform: translateY(100vh);
      opacity: 0;
    }
    65%{
      transform: translateY(-15vh) scale(0.55, 0.65) perspective(2000px) rotateX(40deg);
      opacity: 1;
    }
    100%{
      transform: translateY(0vh) scale(1);
    }
  }

  @media not all and (min-resolution:.001dpcm) { 
    animation: ${({LoadingDuration}) => `HomeShowSafariAnim 2s ${LoadingDuration+2}s ease forwards`};
  }
  @keyframes HomeShowSafariAnim {
    0%{
      transform: translateY(100vh);
      opacity: 0;
    }
    65%{
      transform: translateY(-15vh);
      opacity: 1;
    }
    100%{
      transform: translateY(0vh);
    }
  }

  @media (max-width: 1300px){
    background-size: 100% 85vh;
  }

  ${media.mobile`
    background-size: 100% 50vh;
  `}
`;

export const SubWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 38%;
  transform: translateY(-38%);
  text-align: center;
  font-family: 'Stay Writer', sans-serif;

  ${media.mobile`
    top: 55%;
    transform: translateY(-55%);
  `}
`

export const Name = styled.h1`
  margin: 0;
  font-weight: 100;
  font-size: 4rem;

  ${media.tablet`
    font-size: 3rem;
  `}

  ${media.mobile`
    font-size: 2.5rem;
  `}

  strong{
    font-weight: 900;
  }
`;

export const FirstName = styled.span`
  display: inline-block;
  border-top: 5px solid white;
  margin-right: 10px;
`;
export const LastName = styled.span`
  display: inline-block;
  border-bottom: 5px solid white;
`;

export const JobNameWrapper = styled.h2`
  margin: 30px 0 5px;
  font-weight: 100;
  font-size: 2.5rem;
  color: ${MainColor};

  ${media.tablet`
    font-size: 2rem;
  `}

  ${media.mobile`
    margin-top: 20px;
    font-size: 1.6rem;

      & > span{
      display: block;
    }
  `}
  
  span.ampersand{
    display: inline-block;
    margin: 0 15px;
    color: white;
  }
`;

export const BaseIn = styled.h3`
  margin: 0;
  font-weight: 100;
  font-size: 1.8rem;

  ${media.tablet`
    font-size: 1.5rem;
  `}
  ${media.mobile`
    font-size: 1.1rem;
  `}

  span.detail-address {
    border-bottom: 1px dashed ${MainColor};
  }
`;

export const ScrollDown = styled.span`
  position: absolute;
  bottom: 15%;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid #fff;
  border-radius: 50px;
  box-sizing: border-box;

  &:before {
    position: absolute;
    top: 10px;
    left: 50%;
    content: '';
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: #fff;
    border-radius: 100%;
    -webkit-animation: scrollDownAnim 1.5s infinite;
    animation: scrollDownAnim 1.5s infinite;
    box-sizing: border-box;
  }

  @keyframes scrollDownAnim {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      transform: translate(0, 20px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;