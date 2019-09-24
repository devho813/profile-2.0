import styled from 'styled-components';
import { MainColor, inViewTransition, media } from '../../GlobalStyle';
export const SectionWrapper = styled.section`
  position: relative;
  width: 97%;
  text-align: center;
  padding: 120px 0 90px 0;
  background-color: white;
  padding-left: 3%;
  overflow-x: hidden;

  background: linear-gradient(to bottom, #1c1b35, #222);
`;

export const SectionTitle = styled.h1`
  position: relative;
  color: white;
  font-size: 2.3rem;
  font-weight: 400;
  
  ${media.tablet`
    font-size: 2rem;
  `}
  
  ${inViewTransition};
`

export const DecoBar = styled.span`
  display: block;
  margin: 20px auto 0;
  width: 100px;
  height: 1px;
  border-bottom: 1px solid ${MainColor};
`;

export const SectionContent = styled.div`
  position: relative;
  width: 100%;
  font-size: 0.9rem;
  line-height: 1.4rem;
  letter-spacing: .5px;
  font-weight: 300;
  font-style: normal;
  margin-top: 50px;
  text-align: left;
`;