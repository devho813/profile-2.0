import styled from 'styled-components';
import backToTheTopIcon from '../../assets/images/icon/icon_back_to_top.svg'
import MainHeaderBackgroundImage from "../../assets/images/main_header_background.jpg";

export const FooterWrapper = styled.footer`
  width: 100vw;
  background-color: #222;
  text-align: center;
  padding: 40px 0;

  background: rgba(0,0,0,0.8) url(${MainHeaderBackgroundImage});
  background-size: cover;
  background-blend-mode: multiply;
`;

export const BackToTop = styled.div`
  position: fixed;
  right: 15px;
  bottom: 110px;
  width: 70px;
  height: 70px;
  background: url(${backToTheTopIcon}) no-repeat;
  background-size: 80% 80%;
  background-position: center;
  cursor: pointer;
  transform: rotate(180deg);
  border-radius: 10px;
  transition: opacity .3s;
  opacity: ${({backToTopState}) => backToTopState ? 1:0};
`;

export const Copyright = styled.div`
  color: white;
  font-size: 0.9rem;
  font-weight: 200;
`;