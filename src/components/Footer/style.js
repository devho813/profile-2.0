import styled from 'styled-components';
import backToTheTopIcon from '../../assets/images/icon/icon_back_to_top.svg'

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #222;
  text-align: center;
  padding: 40px 0;
`;

export const BackToTop = styled.div`
  position: fixed;
  right: 1vw;
  bottom: 2vh;
  width: 40px;
  height: 40px;
  padding: 5px;
  background: url(${backToTheTopIcon}) no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
  transition: opacity .5s, transform .5s;
  opacity: ${({backToTopState}) => backToTopState ? 1:0};
  transform: ${({backToTopState}) => backToTopState ? 
    `translateX(0)`
  :
    `translateX(100px)`};
`;

export const Copyright = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 200;
`;