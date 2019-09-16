import styled from 'styled-components';
import HomeBackgroundImage from "../../assets/images/home_background.jpg";
import { MainColor } from '../../GlobalStyle';

export const HomeContainer = styled.header`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #222;
`;

export const HomeWrapper = styled.div`
  position: relative;
  width: 120%;
  height: 120%;
  left: -10%;
  top: -10%;  
  color: white;
  background: rgba(0,0,0,0.8) url(${HomeBackgroundImage});
  background-size: cover;
  background-blend-mode: multiply;

  transition: background-position 1s ease-out;
  animation: HomeShowAnim 2s ease forwards;

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
`;

export const SubWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 45%;
  transform: translateY(-45%);
  text-align: center;
  z-index: 9;
`

export const Name = styled.h1`
  margin: 0;
  font-weight: 100;
  font-size: 3rem;

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
  margin: 40px 0 5px;
  font-weight: 100;
  font-size: 2rem;
  color: ${MainColor};
  
  span.ampersand{
    display: inline-block;
    margin: 0 15px;
    color: white;
  }
`;

export const BaseIn = styled.h3`
  margin: 0;
  font-weight: 100;
  font-size: 1.7rem;

  span.detail-address {
    cursor: pointer;
    border-bottom: 1px dashed ${MainColor};

    :hover{
      color: ${MainColor};
    }
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