import styled from 'styled-components';
import { media } from '../../GlobalStyle';

export const BackgroundBlack = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 11;
  transition: ${({activeState}) => activeState ? `all .6s ease-out`: `all .4s ease-in .6s;`};
  transition-property: opacity, visibility;
  opacity: ${({activeState}) => activeState ? 1 : 0};
  visibility: ${({activeState}) => activeState ? `visible;` : 'hidden;'};
  
  ${media.mobile`
    z-index: 12;
  `}
`;

export const TechBoxContainer = styled.div`
  width: 15%;
  cursor: pointer;
  z-index: 12;
  opacity: ${({activeState}) => activeState ? 1 : 0.15};
  opacity: ${({allTechActiveState}) => !allTechActiveState && 1};
  transition: opacity .8s;

  ${({techId}) => {
    switch(techId){
      case 1: return `position: absolute; left: 2.5%; bottom: 0;`;
      case 2: return `position: absolute; left: 19%; bottom: 0;`;
      case 3: return `position: absolute; left: 35%; bottom: 0;`;
      case 4: return `position: absolute; left: 53.5%; bottom: 0;`;
      case 5: return `position: absolute; left: 69%; bottom: 0;`;
      case 6: return `position: absolute; left: 71.5%; bottom: 24.5%;`;
      case 7: return `position: absolute; left: 67%; bottom: 49%;`;
      case 8: return `position: absolute; left: 28.5%; bottom: 24.5%;`;
      case 9: return `position: absolute; left: 54.5%; bottom: 27.5%; transform: rotate(-28deg);`;
      case 10: return `position: absolute; left: 42%; bottom: 47%; transform: rotate(-14deg);`;
    }
  }}
`;

export const TechImage = styled.img`
  width: 100%;
  /* box-shadow: 2px 2px 5px #222; */
  border-radius: 10px;
  background-color: white;

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

  ${media.mobile`
    display: none;
  `};
  
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

    ${media.tablet`
      width: 220px;
      font-size: 0.8rem;
      line-height: 1.2rem;
      bottom: calc(100% + 20px);
    `};
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

export const TechContent2 = styled.p`
  display: none;

  ${media.mobile`
    display: block;
    color: white;
    position: absolute;
    width: 90%;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -40%);
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 0.9rem;
    line-height: 1.2rem;
    text-align: left;
  `}
`