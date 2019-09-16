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
  transition-property: opacity, visibility;
  opacity: ${({activeState}) => activeState ? 1 : 0};
  visibility: ${({activeState}) => activeState ? `visible;` : 'hidden;'};
`;

export const TechBoxContainer = styled.div`
  width: 16%;
  cursor: pointer;
  z-index: 3;
  opacity: ${({activeState}) => activeState ? 1 : 0.15};
  opacity: ${({allTechActiveState}) => !allTechActiveState && 1};
  transition: opacity .8s;

  ${({techId}) => {
    switch(techId){
      case 1: return `position: absolute; left: 5%; bottom: 0;`;
      case 2: return `position: absolute; left: 23%; bottom: 0;`;
      case 3: return `position: absolute; left: 40%; bottom: 0;`;
      case 4: return `position: absolute; left: 57%; bottom: 0;`;
      case 5: return `position: absolute; left: 75%; bottom: 0;`;
      case 6: return `position: absolute; left: 77.5%; bottom: 26.5%;`;
      case 7: return `position: absolute; left: 73%; bottom: 52.5%;`;
      case 8: return `position: absolute; left: 26%; bottom: 26.5%;`;
      case 9: return `position: absolute; left: 59.5%; bottom: 29.5%; transform: rotate(-28deg);`;
      case 10: return `position: absolute; left: 41%; bottom: 45.5%; transform: rotate(-14deg);`;
    }
  }}
`;

export const TechImage = styled.img`
  width: 100%;
  box-shadow: 2px 2px 5px #222;
  border-radius: 10px;
  background-color: white;
  z-index: 3;

  transition: ${({techId}) => `all 1s .${techId}s`};
  transition-property: opacity, transform;
  opacity: ${({inView}) => inView ? 1 : 0};
  transform: ${({inView}) => inView ? `translateY(0)`:`translateY(10vh)`};
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