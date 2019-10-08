import styled from 'styled-components';
import { media } from '../../GlobalStyle';

export const Images = styled.img`
  width: 100%;
  border-radius: 5px;
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

  ${media.tablet`
    left: 0;
    opacity: 1;
    visibility: visible;
  `}
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

  ${media.tablet`
    right: 0;
    opacity: 1;
    visibility: visible;
  `}
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