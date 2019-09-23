import styled from 'styled-components';
import {MainColor, media} from '../../GlobalStyle';

export const NavigationWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  visibility: ${({extend}) => extend ? `visible`: `hidden`};
  background-color: ${({extend}) => extend ? `#222`: `transparent`};
  transition: ${({extend}) => extend ? `all .6s ease-out`: `all .6s ease-in .4s`};
  transition-property: visibility, background-color;
  z-index: 1000;
  overflow: hidden;
`;

export const NavigationIcon = styled.div`
  position: absolute;
  right: 4vw;
  top: 4vw;
  width: 60px;
  height: 60px;
  transition: all .5s;
  transition-property: background-color;
  cursor: pointer;
  visibility: visible;
  z-index: 1000;

  ${media.tablet`
    width: 50px;
    height: 50px;
  `}

  &:hover{
    background-color: ${MainColor};
  }

  span{
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    width: 60%;
    height: 3px;
    background-color: white;
    transform: translate(-50%, -50%);
    transition: all .5s;
  }

  span:nth-child(1){ top: calc(50% - 9px); }
  span:nth-child(3){ top: calc(50% + 9px); }

  ${({extend}) => extend && 
    `
      span:nth-child(1){
        transform: translate(-50%, -50%) rotate(45deg);
        top: 50%;
      }
      span:nth-child(2){ opacity: 0; }
      span:nth-child(3){
        transform: translate(-50%, -50%) rotate(135deg);
        top: 50%;
      }
    `
  }

  &:hover span{
    background-color: #222;
    width: 40%;
    height: 2px;
  }
`;

export const NavigationContent = styled.div`
  position: absolute;
  left: 70%;
  top: 50%;
  width: 90%;
  transform: translate(-70%, -50%);
  ${media.tablet`
    top: 40%;
    transform: translate(-70%, -40%);
  `}
  ${media.mobile`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translate(0, 0);
  `}
`;

export const SectionList = styled.ul`
  position: relative;
  float: right;
  width: 20%;
  ${media.tablet`width: 25%;`}
  left: ${({extend}) => extend ? `0` : `70px`};
  opacity: ${({extend}) => extend ? 1 : 0};
  transition: ${({extend}) => extend ? `all .6s .4s` : `all .6s .3s`};
  transition-property: left, opacity;

  ${media.mobile`
    width: 100%;
    float: none;
    margin-top: 120px;
  `}

  li {
    margin: 50px 0;
    color: white;
    font-size: 2rem;
    ${media.tablet`font-size: 1.8rem`};
    font-weight: 200;
    text-align: left;
    cursor: pointer;
    transition: color .6s;

    ${media.mobile`
      text-align: center;
      margin: 40px 0;
    `}

    &:hover {
      color: ${MainColor};
    }
  }
`;