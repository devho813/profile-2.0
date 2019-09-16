import styled from 'styled-components';
import { MainColor } from '../../GlobalStyle';
export const SectionWrapper = styled.section`
  width: 97%;
  text-align: center;
  padding: 90px 0;
  background-color: white;
  padding-left: 3%;
`;

export const SectionTitle = styled.h1`
  position: relative;
  font-weight: 400;
  
  transition: all 1s .2s;
  transition-property: opacity, transform;
  opacity: ${({inView}) => inView ? 1 : 0};
  transform: ${({inView}) => inView ? `translateY(0)`:`translateY(10vh)`};
`

export const DecoBar = styled.span`
  display: block;
  margin: 20px auto 0;
  width: 100px;
  height: 1px;
  border-bottom: 1px solid ${MainColor};
`;

export const SectionContent = styled.div`
  width: 100%;
  font-size: 0.9rem;
  line-height: 1.4rem;
  letter-spacing: .5px;
  font-weight: 300;
  font-style: normal;
  margin-top: 50px;
  text-align: left;
`;