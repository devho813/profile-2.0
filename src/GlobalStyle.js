import { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize';
import FontSetting from './FontSetting';

export const MainColor = 'darksalmon';
export const inViewTransition = css`
  transition: all 1s .2s;
  transition-property: opacity, transform;
  opacity: ${({inView}) => inView ? 1 : 0};
  transform: ${({inView}) => inView ? `translateY(0)`:`translateY(10vh)`};
`;

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${FontSetting}

  html, body {
    width: 100%;
    font-family: 'Stay Writer', 'SSShinb7', 'Noto Sans KR', sans-serif;
    font-size: 16px;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`

// media query
const sizes = {
  tablet: 1023,
  mobile: 767
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css `
    @media (max-width: ${sizes[label] / 16}em){
      ${css(...args)};
    }
  `;

  return acc;
}, {});