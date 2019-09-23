import styled from 'styled-components';
import { MainColor, inViewTransition, media } from '../../GlobalStyle';

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  text-align: center;
  padding: 90px 0 120px 0;

  background: linear-gradient(to bottom, #4E4D67, #3a3953);
`;

export const SectionTitle = styled.h1`
  position: relative;
  color: white;
  font-size: 2.3rem;
  font-weight: 400;

  ${media.tablet`
    font-size: 2rem;
  `}

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
  position: relative;
  font-size: 1.2rem;
  line-height: 1.7rem;
  letter-spacing: .5px;
  font-weight: 300;
  font-style: normal;
  color: white;
  margin-top: 40px;

  ${media.tablet`
    font-size: 1rem;
    line-height: 1.5rem;
  `}
  ${media.mobile`
    width: 90%;
    margin: 0 auto;
  `}

  ${inViewTransition};
`;

export const ContactInfoTitle = styled.h2`
  position: relative;
  margin-top: 50px;
  font-size: 1.5rem;
  font-weight: 400;
  color: white;

  ${media.tablet`
    font-size: 1.3rem;
  `}

  ${inViewTransition};
`;

export const ContactInfoList = styled.ul`
  position: relative;
  margin-top: 30px;
  z-index: 1;

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

    ${media.tablet`
      width: 50px;
      height: 50px;
    `}
    
    ${media.mobile`
      margin: 0 10px;
      line-height: 50px;
    `}

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

  ${media.tablet`
    width: 180px;
    height: 25px;
    line-height: 25px;
  `}

  ${({type}) => type === 'kakaoTalk' && media.mobile`
    width: 100px;
  `}

  &:before {
    content: '';
    position: absolute;
    left: 23px;
    top: -8px;
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

    ${media.tablet`
      font-size: 1rem;
    `};

    a{
      text-decoration: none;
      cursor: pointer;
      color: white;
    }
  }
`;