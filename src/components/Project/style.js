import styled from 'styled-components';
import { MainColor } from '../../GlobalStyle';

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

  h4{
    /* title */
    padding: 1% 2% 0%;
    margin: 0;
    font-size: 0.9rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
    
    span{
      /* year */
      display: inline-block;
      margin-left: 3px;
      font-weight: 400;
      font-size: 0.8rem;
      vertical-align: middle;
    }
  }
`;

export const ProjectImage = styled.img`
  position: relative;
  top: 0;
  width: 100%;
  transition: top .5s ease-in .1s;
`;

export const ProjectEnv = styled.span`
  display: inline-block;
  padding: 0% 2% 1%;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const ProjectWrapper = styled.article`
  position: relative;
  display: inline-block;
  width: 25%;
  margin: 2% 3%;
  cursor: pointer;
  
  &:hover ${ProjectLabel}{
    bottom: 0px;
    opacity: 1;
  }
  
  &:hover ${ProjectImage}{
    top: -15px;
  }
`;