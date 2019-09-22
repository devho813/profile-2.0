import styled from 'styled-components';
import { media } from '../../GlobalStyle';
import { faTable } from '@fortawesome/free-solid-svg-icons';

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #222;
  text-align: center;
  padding: 40px 0;
`;

export const BackToTop = styled.div`
  position: fixed;
  right: 1vw;
  bottom: 3vh;
  padding: 10px;
  cursor: pointer;
  transition: opacity .5s, transform .5s;
  opacity: ${({backToTopState}) => backToTopState ? 1:0};
  transform: ${({backToTopState}) => backToTopState ? 
    `translateY(0)`
    :
    `translateY(100px)`
  };
  color: white;
  font-size: 1.2rem;
  z-index: 99;

  ${media.mobile`
    right: -10px;
  `}

  i{
    display: block;
    font-style: normal;
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

  span {
    display: block;
    transform: rotate(90deg);
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 0.8rem;
    font-weight: 300;
  }
`;

export const Copyright = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 200;

  ${media.tablet`
    font-size: 1.1rem;
  `}
`;