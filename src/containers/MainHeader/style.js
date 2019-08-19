import styled from 'styled-components';
import MainHeaderBackgroundImage from "../../assets/images/main_header_background.jpg";

export const MainHeaderWrapper = styled.header`
  width: 100%;
  height: 100vh;
  color: white;
  background: rgba(0,0,0,0.8) url(${MainHeaderBackgroundImage});
  background-size: cover;
  background-blend-mode: multiply;

  animation: MainHeaderShowAnim 2.5s ease forwards;

  @keyframes MainHeaderShowAnim {
    0%{
      transform: translateY(100%);
      opacity: 0;
    }
    65%{
      transform: translateY(-15%) scale(0.55, 0.65) perspective(2000px) rotateX(40deg);
      opacity: 1;
    }
    100%{
      transform: translateY(0%) scale(1);
    }
  }
`;

export const SubWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 45%;
  transform: translateY(-45%);
  text-align: center;
`

export const Name = styled.h1`
  margin: 0;
  font-weight: 100;
  font-size: 3rem;

  strong{
    font-weight: 900;
  }
`;

export const JobNameWrapper = styled.h2`
  margin: 30px 0 5px;
  font-weight: 100;
  font-size: 2rem;
  color: skyblue;
  
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
    border-bottom: 1px dashed skyblue;

    :hover{
      color: skyblue;
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