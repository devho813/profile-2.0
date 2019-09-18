import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MainColor } from '../../GlobalStyle';

export const QuoteWrapper = styled.div`
  position: relative;
  float: right;
  width: 70%;
  padding: 170px 10% 0 0;
  text-align: right;

  left: ${({ extend }) => extend ? `0` : `-70px`};
  top: ${({ extend }) => extend ? `0` : `70px`};
  opacity: ${({ extend }) => extend ? 1 : 0};
  transition: ${({ extend }) => extend ? `all .6s .8s` : `all .6s`};
  transition-property: left, top, opacity;
`;

export const QuoteTitle = styled.h3`
  padding-right: 10px;
  font-size: 1.9rem;
  font-weight: 300;
  color: white;
  opacity: 0.2;
  margin: 0 0 2.5rem 0;
`;

export const QuoteContent = styled.span`
  position: relative;
  display: inline-block;
  font-size: 1.7rem;
  font-weight: 100;
  color: white;
  font-style: italic;
`;

export const QuoteMarkLeft = styled(FontAwesomeIcon)`
  position: absolute;
  top: -1.6rem;
  left: -1.6rem;
  font-size: 1.6rem;
  color: ${MainColor};
`;

export const QuoteMarkRight = styled(FontAwesomeIcon)`
  position: absolute;
  top: -1.6rem;
  right: -1.6rem;
  font-size: 1.6rem;
  color: ${MainColor};
`;

export const Author = styled.span`
  display: block;
  opacity: .5;
  font-size: 1.2rem;
  padding-right: 10px;
  letter-spacing: 1.1px;
  font-weight: normal;
  font-style: italic;
  color: white;
  margin-top: 1rem;
`;