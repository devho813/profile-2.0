import styled from 'styled-components';
import { MainColor, inViewTransition, media } from '../../GlobalStyle';

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  text-align: center;
  padding: 120px 0;
  overflow-x: hidden;
  background: linear-gradient(to bottom, #3a3953, #1c1b35);
`;

export const SectionTitle = styled.h1`
  position: relative;
  color: white;
  font-size: 2.3rem;
  font-weight: 400;

  ${media.tablet`
    font-size: 2rem;
  `}

  ${inViewTransition}
`

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
  font-family: 'Noto Sans KR', 'Stay Writer', sans-serif;
  line-height: 1.4rem;
  letter-spacing: .5px;
  font-weight: 300;
  font-style: normal;
  margin-top: 30px;
`;

export const TechBoxWrapper = styled.div`
  position: relative;
  width: 40vw;
  max-width: 1020px;
  height: 25vw;
  max-height: 600px;
  margin: 0 auto;

  ${media.tablet`
    width: 55vw;
    height: 33vw;  
  `}
  ${media.mobile`
    width: 100vw;
    height: 61vw;
    left: 7vw;
  `}
`;