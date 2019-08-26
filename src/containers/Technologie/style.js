import styled from 'styled-components';
import { MainColor } from '../../GlobalStyle';

export const SectionWrapper = styled.section`
  width: 100%;
  text-align: center;
  padding: 90px 0;
  background-color: #fafafa;

  h1{
    position: relative;
    font-weight: 400;
  }
`;

export const DecoBar = styled.span`
  display: block;
  margin: 20px auto 0;
  width: 100px;
  height: 1px;
  border-bottom: 1px solid ${MainColor};
`;

export const SectionContent = styled.article`
  width: 100%;
  font-size: 0.9rem;
  line-height: 1.4rem;
  letter-spacing: .5px;
  font-weight: 300;
  font-style: normal;
  margin-top: 50px;
`;

export const TechBoxWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 600px;
  margin: 0 auto;

  & div:nth-child(1) { position: absolute; left: calc(44% - 216px); bottom: 0; transform: rotate(-45deg); } /* 'html5', */
  & div:nth-child(2) { position: absolute; left: calc(44% - 108px); bottom: 0; } /* 'css3', */
  & div:nth-child(3) { position: absolute; left: 44%; bottom: 0; } /* 'javascript', */
  & div:nth-child(4) { position: absolute; left: calc(44% + 108px); bottom: 0; } /* 'nodejs', */
  & div:nth-child(5) { position: absolute; left: calc(44% + 216px); bottom: 0; } /* 'webpack', */
  & div:nth-child(6) { position: absolute; right: 0; bottom: 108px; } /* 'typescript', */
  & div:nth-child(7) { position: absolute; right: 0; bottom: 216px; } /* 'angular', */
  & div:nth-child(8) { position: absolute; right: 0; bottom: 324px; } /* 'vue', */
  & div:nth-child(9) { position: absolute; right: 108px; bottom: 108px; transform: rotate(-45deg); } /* 'react', */
  & div:nth-child(10) { position: absolute; left: 108px; bottom: 108px; } /* 'git'  */
`;

export const TechBox = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 3px solid ${MainColor};
  ${props => 'background: url('+require("../../assets/images/logo/logo_"+props.techName+".svg")+') no-repeat center'};
  background-size: contain;
`;