import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export const RightArrow = styled.div`
  position: absolute;
  width: 7%;
  height: 98%;
  right: -7%;
  top: 0;
  background: url('${require('../../assets/images/icon/icon_double_arrow.svg')}') no-repeat;
  background-size: contain;
  background-color: rgba(128,128,128,0.2);
  background-position: center;
  transform: rotate(360deg);
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  transition: all .6s .1s;
  transition-property: right, opacity, visibility;
`;

export const LeftArrow = styled.div`
  position: absolute;
  width: 7%;
  height: 98%;
  left: -7%;
  top: 0;
  background: url('${require('../../assets/images/icon/icon_double_arrow.svg')}') no-repeat;
  background-size: contain;
  background-color: rgba(128,128,128,0.2);
  background-position: center;
  transform: rotate(180deg);
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  transition: all .6s .1s;
  transition-property: left, opacity, visibility;
`;

export const Images = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  &:hover ${LeftArrow}{
    left: 0;
    opacity: 1;
    visibility: visible;
  }
  &:hover ${RightArrow} {
    right: 0;
    opacity: 1;
    visibility: visible;
  }
`;

export const DetailRight = styled.ul`
  float: left;
  width: 36%;
  color: rgba(255, 255, 255, 0.6);
  text-align: left;
  padding: 0 2%;
  font-size: 0.9rem;

  & li{
    margin-top: 3px;
  }
`;

export const DetailHeader = styled.li`
  font-weight: 500;
  font-size: 1rem;
  color: white;
`;

export const DetailTech = styled.li`
  color: white;

  h4{
    margin: 15px 8px 5px;
    font-size: 1rem;
    font-weight: 400;
  }

  span{
    display: inline-block;
    margin: 3px;
    padding: 2px 5px;
    background-color: #3F729B;
    font-size: 0.8rem;
    color: white;
  }
`;

export const DetailLeft = styled.div`
  float: left;
  width: 60%;
`;

export const DetailWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -45%);
  width: 65%;
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