import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { media } from '../../GlobalStyle';

export const Icon = styled(FontAwesomeIcon)`
  width: 1.5rem !important;
  height: 1.5rem !important;
  padding: 0.2rem;
`;

export const GotoSite = styled.div`
  width: 100%;
  text-align: right;

  a{
    text-decoration: none;
    color: white;

    ${Icon}{
      margin: 0 8px;
    }
  }
`;

export const DetailRight = styled.ul`
  float: left;
  width: 39%;
  color: rgba(255, 255, 255, 0.6);
  text-align: left;
  padding: 0 2%;
  font-size: 1.1rem;

  & li{
    margin-top: 3px;
  }

  ${media.mobile`
    float: none;
    width: 90%;
    margin: 0 auto;
  `}
`;

export const DetailHeader = styled.li`
  font-weight: 500;
  font-size: 1.2rem;
  color: white;

  ${media.tablet`
    font-size: 1.1rem;
  `};
`;

export const DetailTech = styled.li`
  color: white;

  h4{
    margin: 15px 8px 5px;
    font-size: 1.2rem;
    font-weight: 400;
    
    ${media.tablet`
      font-size: 1.1rem;
  `};
  }

  span{
    display: inline-block;
    margin: 3px;
    padding: 2px 5px;
    background-color: #3F729B;
    font-size: 1.1rem;
    color: white;
    ${media.tablet`
      font-size: 1rem;
    `};
  }
`;

export const HashSymbol = styled.i`
  display: inline-block;
  font-style: normal;
  font-family: 'Noto Sans KR', sans-serif;
`;

export const DetailLeft = styled.div`
  float: left;
  width: 57%;

  ${media.mobile`
    float: none;
    width: 90%;
    margin: 0 auto;
  `}
`;

export const DetailWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -45%);
  width: 75%;

  ${media.tablet`
    width: 95%;
  `};
`;

export const ProjectDetail = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 100;
  opacity: 0;
  cursor: auto;

  animation: popupShowAnim .6s ease-out forwards;

  @keyframes popupShowAnim {
    from{
      opacity: 0;      
    }
    to{
      opacity: 1;
    }
  }
`;

