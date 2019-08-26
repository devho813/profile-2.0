import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize';

export const MainColor = '#42b983';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  /* You can continue writing global styles here */
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 100;
    src: url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Thin.woff2')}) format('woff2'),
        url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Thin.woff')}) format('woff'),
        url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Thin.otf')}) format('opentype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    src: url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Light.woff2')}) format('woff2'),
        url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Light.woff')}) format('woff'),
        url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Light.otf')}) format('opentype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    src: url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Regular.woff2')}) format('woff2'),
          url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Regular.woff')}) format('woff'),
          url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Regular.otf')}) format('opentype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    src: url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Medium.woff2')}) format('woff2'),
          url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Medium.woff')}) format('woff'),
          url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Medium.otf')}) format('opentype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    src: url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Bold.woff2')}) format('woff2'),
          url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Bold.woff')}) format('woff'),
          url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Bold.otf')}) format('opentype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 900;
    src: url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Black.woff2')}) format('woff2'),
          url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Black.woff')}) format('woff'),
          url(${require('./assets/fonts/NotoSansKR/NotoSansKR-Black.otf')}) format('opentype');
  } 

  @font-face {
    font-family: 'Titan One';
    font-style: normal;
    font-weight: 400;
    src: url(${require('./assets/fonts/TitanOne/TitanOne-Regular.ttf')}) format('truetype'),
          url(${require('./assets/fonts/TitanOne/TitanOne-Regular.woff')}) format('woff'),
          url(${require('./assets/fonts/TitanOne/TitanOne-Regular.otf')}) format('opentype');
  } 

  html, body {
    width: 100%;
    font-family:'Noto Sans KR', sans-serif;
    font-size: 16px;
    box-sizing: border-box;
  }

  ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`