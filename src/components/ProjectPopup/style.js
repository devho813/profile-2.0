import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PopupClose = styled(FontAwesomeIcon)`
  position: absolute;
  right: 0;
  top: -55px;
  width: 30px !important;
  height: 30px !important;
  color: #eb0058;
  cursor: pointer;
`;

export const GotoSite = styled.span`

  & li a {
    text-decoration: none;
    color: rgba(255,255,255,0.6);
    font-size: 1.1rem;
    user-select: none;
  }
`;

export const RightArrow = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  padding: 10px;
  right: 30px;
  top: 45%;
  transform: translateY(-45%);
  background: url('${require('../../assets/images/icon/icon_double_arrow.svg')}') no-repeat;
  background-size: contain;
  background-color: rgba(255, 255, 255, 0.9);
  transform: rotate(360deg);
  opacity: 0;
  cursor: pointer;
  transition: opacity .8s;
`;

export const LeftArrow = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  padding: 10px;
  left: 30px;
  top: 45%;
  transform: translateY(-45%);
  background: url('${require('../../assets/images/icon/icon_double_arrow.svg')}') no-repeat;
  background-size: contain;
  background-color: rgba(255, 255, 255, 0.9);
  transform: rotate(180deg);
  opacity: 0;
  cursor: pointer;
  transition: opacity .8s;
`;

export const Images = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  &:hover ${LeftArrow},
  &:hover ${RightArrow} {
    opacity: 1;
  }
`;

export const DetailRight = styled.ul`
  float: left;
  width: 36%;
  color: white;
  text-align: left;
  padding: 0 2%;
  
  li{
    margin-top: 2px;
    color: rgba(255,255,255,0.6);
  }
  
  li:nth-child(1){
    font-weight: 500;
    font-size: 1rem;
    color: white;
  }

  li:nth-child(4){
    color: white;

    h4{
      font-weight: 400;
      margin: 15px 8px 5px;
    }

    span{
      display: inline-block;
      margin: 3px;
      padding: 2px 5px;
      background-color: #3F729B;
      border-radius: 8px;
      font-size: 0.8rem;
    }
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
  width: 70%;
`;

export const ProjectDetail = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 100;
  cursor: default;
  opacity: 0;

  animation: popupShowAnim .8s ease-out forwards;

  @keyframes popupShowAnim {
    from{
      opacity: 0;      
    }
    to{
      opacity: 1;
    }
  }
`;