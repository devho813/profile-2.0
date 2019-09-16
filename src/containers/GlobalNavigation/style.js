import styled from 'styled-components';
import {MainColor} from '../../GlobalStyle';

export const NavigationWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  visibility: ${({extend}) => extend ? `visible`: `hidden`};
  background-color: ${({extend}) => extend ? `#222`: `transparent`};
  transition: ${({extend}) => extend ? `all .6s ease-out`: `all .6s ease-in .4s`};
  z-index: 10;
  overflow: hidden;
`;

export const NavigationIcon = styled.div`
  position: absolute;
  right: 4vw;
  top: 4vw;
  width: 60px;
  height: 60px;
  transition: all .5s;
  cursor: pointer;
  visibility: visible;

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
    background-color: ${({navIconColorChange}) => 
      navIconColorChange ? 'black' : 'white'
    };
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
`;

export const SectionList = styled.ul`
  position: relative;
  float: right;
  width: 20%;
  left: ${({extend}) => extend ? `0` : `70px`};
  opacity: ${({extend}) => extend ? 1 : 0};
  transition: ${({extend}) => extend ? `all .6s .4s` : `all .6s .3s`};

  li {
    margin: 50px 0;
    color: white;
    font-size: 1.7rem;
    font-weight: 200;
    text-align: left;
    cursor: pointer;

    transition: color .6s;

    &:hover {
      color: ${MainColor};
    }
  }
`;