import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  visibility: ${({extend}) => extend ? `visible`: `hidden`};
  background-color: ${({extend}) => extend ? `#222`: `transparent`};
  transition: all .8s;
  z-index: 10;
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
    background-color: skyblue;
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