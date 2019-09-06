import styled from 'styled-components';

export const BackgroundBlack = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: black;
  z-index: 1;
  transition: ${({activeState}) => activeState ? `all .6s ease-out`: `all .4s ease-in .6s;`};
  opacity: ${({activeState}) => activeState ? 1 : 0};
  visibility: ${({activeState}) => activeState ? `visible;` : 'hidden;'};
`;

export const TechBoxContainer = styled.div`
  width: 17%;
  cursor: pointer;
  z-index: 3;
  opacity: ${({activeState}) => activeState ? 1 : 0.15};
  opacity: ${({allTechActiveState}) => !allTechActiveState && 1};
  transition: opacity .8s;

  ${({techId}) => {
    switch(techId){
      case 1: return `position: absolute; left: 2%; bottom: 0;`;
      case 2: return `position: absolute; left: 20%; bottom: 0;`;
      case 3: return `position: absolute; left: 38%; bottom: 0;`;
      case 4: return `position: absolute; left: 56%; bottom: 0;`;
      case 5: return `position: absolute; left: 75%; bottom: 0;`;
      case 6: return `position: absolute; left: 77.5%; bottom: 28%;`;
      case 7: return `position: absolute; left: 73%; bottom: 56%;`;
      case 8: return `position: absolute; left: 25%; bottom: 28%;;`
      case 9: return `position: absolute; left: 58%; bottom: 31.5%; transform: rotate(-30deg);`;
      case 10: return `position: absolute; left: 41%; bottom: 51.5%; transform: rotate(-12deg);`;
    }
  }}
`;

export const TechImage = styled.img`
  width: 100%;
  box-shadow: 2px 2px 5px #222;
  border-radius: 10px;
  background-color: white;
  z-index: 3;
`;

export const TechContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 5;
  
  .hint-content {
    color: #fff;
    width: 300px;
    position: absolute;
    left: calc(100% + 20px);
    bottom: calc(100% + 30px);
    z-index: 6;
    padding: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s ease, visibility 1s ease;
    transition-duration: 1.5s;
    pointer-events: none;
    color: #fff;
    visibility: hidden;
    pointer-events: none;
    text-align: left;
  }
  &:hover .hint-content {
    opacity: 1;
    visibility: visible !important;
  }
  .hint-content::before {
    width: 0px;
    bottom: 0;
    left: 0;
    content: '';
    background-color: #fff;
    height: 1px;
    position: absolute;
    transition: width 0.5s;
    transition-duration: .8s;
  }
  &:hover .hint-content::before {
    width: 180px;
  }
  .hint-content::after {
    transform-origin: 0 50%;
    transform: rotate(-225deg);
    bottom: 0;
    left: 0;
    width: 80px;
    content: '';
    background-color: #fff;
    height: 1px;
    position: absolute;
    opacity: 1;
    transition: opacity 1s ease;
  }
  &:hover .hint-content::after {
    opacity: 1;
    visibility: visible;
  }
`;