import styled from 'styled-components';
import { MainColor, media } from '../../GlobalStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PopupClose = styled(FontAwesomeIcon)`
  position: absolute;
  right: 0;
  top: -65px;
  padding: 15px;
  width: 30px !important;
  height: 30px !important;
  color: #eb0058;
  cursor: pointer;
`;

export const ProjectImage = styled.img`
  position: relative;
  top: 0;
  width: 100%;
  transition: top .5s ease-in .1s, opacity 1s .2s, transform 1s .2s;
  opacity: ${({inView}) => inView ? 1 : 0};
  transform: ${({inView}) => inView ? `translateY(0)`:`translateY(10vh)`};
  border-radius: 5px;
  z-index: 1;

  /* 모바일, 태블릿 환경에서 left arrow, right arrow 클릭 시 깜빡임 현상 때문에 display 임시 none 처리 */
  ${({popupState}) => popupState && `display: none;`}
`;

export const ProjectLabel = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: -15px;
  background-color: ${MainColor};
  text-align: left;
  color: white;
  opacity: 0;
  transition: all .8s;
  transition-property: opacity, bottom;
  z-index: 1;

  h4{
    /* title */
    padding: 1% 2% 0%;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
    
    span{
      /* year */
      display: inline-block;
      margin-left: 3px;
      font-weight: 400;
      font-size: 1.1rem;
      vertical-align: middle;
    }
  }
`;

export const ProjectEnv = styled.span`
  display: inline-block;
  padding: 0% 2% 1%;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const ProjectWrapper = styled.article`
  position: relative;
  display: inline-block;
  width: 25%;
  margin: 2% 3%;
  cursor: pointer;

  ${media.tablet`
    width: 43%;
  `}

  ${media.mobile`
    width: 90%;
    margin: 5% 3%;
  `}
  
  &:hover ${ProjectLabel}{
    bottom: 0px;
    opacity: 1;
  }
  
  &:hover ${ProjectImage}{
    top: -15px;
  }
`;