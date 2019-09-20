import styled from 'styled-components';
import { MainColor, inViewTransition } from '../../GlobalStyle';

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  text-align: center;
  padding: 90px 0 100px 0;
  overflow: hidden;

  background: linear-gradient(to bottom, #4E4D67, #3a3953);
`;

export const SectionTitle = styled.h1`
  position: relative;
  color: white;
  font-size: 2.3rem;
  font-weight: 400;

  ${inViewTransition};
`

export const DecoBar = styled.span`
  display: block;
  margin: 20px auto 0;
  width: 100px;
  height: 1px;
  border-bottom: 1px solid ${MainColor};
`;

export const SectionContent = styled.article`
  font-size: 1.2rem;
  line-height: 1.7rem;
  letter-spacing: .5px;
  font-weight: 300;
  font-style: normal;
  color: white;
  margin-top: 40px;

  ${inViewTransition};
`;

export const ContactInfoTitle = styled.h2`
  margin-top: 50px;
  font-size: 1.5rem;
  font-weight: 400;
  color: white;

  ${inViewTransition};
`;

export const ContactInfoList = styled.ul`
  margin-top: 30px;

  ${inViewTransition};

  /* ContactInfoItem */
  li {
    position: relative;
    display: inline-block;
    margin: 0 20px;
    width: 60px;
    height: 60px;
    line-height: 70px;
    cursor: pointer;

    img {
      width: 70%;
      height: 70%;
      vertical-align: middle;
    }
  }
`;

export const ContactInfoPopup = styled.div`
  position: relative;
  top: 5px;
  left: -3px;
  background-color: ${MainColor};
  width: 210px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  transition: opacity .8s;
  z-index: ${props => props.showPopup && 10};
  opacity: ${props => props.showPopup ? 1 : 0};
  ${props => props.showPopup && 
    `animation: popupShakeAnim 500ms ease-in-out forwards;`
  };
  
  @keyframes popupShakeAnim {
    0% { 
      transform: rotate(3deg);
    }
    50% {
    transform: rotate(-4deg);
    }
    70% {
      transform: rotate(4deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  &:before {
    content: '';
    position: absolute;
    left: 23px;
    top: -10px;
    border-width: 10px 8px 0 8px;
    border-style: solid;
    border-color: ${MainColor} transparent transparent transparent;
    transform: rotate(180deg);
  }


  span {
    position: absolute;
    display: inline-block;
    left: 0;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 400;
    color: white;
    cursor: text;

    a{
      text-decoration: none;
      cursor: pointer;
      color: white;
    }
  }
`;