import {css} from 'styled-components';

const FontSetting = css`
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

  @font-face {
    font-family: 'Stay Writer';
    font-style: normal;
    font-weight: 400;
    src: url(${require('./assets/fonts/StayWriter/StayWriter-Handmade.woff2')}) format('woff2'),
          url(${require('./assets/fonts/StayWriter/StayWriter-Handmade.woff')}) format('woff'),
          url(${require('./assets/fonts/StayWriter/StayWriter-Handmade.otf')}) format('opentype');
  }

  @font-face {
    font-family: 'Stay Writer';
    font-style: normal;
    font-weight: 700;
    src: url(${require('./assets/fonts/StayWriter/StayWriter-Bold.woff2')}) format('woff2'),
          url(${require('./assets/fonts/StayWriter/StayWriter-Bold.woff')}) format('woff'),
          url(${require('./assets/fonts/StayWriter/StayWriter-Bold.otf')}) format('opentype');
  }

  @font-face {
    font-family: 'SSShinb7';
    font-style: normal;
    font-weight: 400;
    src: url(${require('./assets/fonts/SSShinb7/SSShinb7.woff2')}) format('woff2'),
          url(${require('./assets/fonts/SSShinb7/SSShinb7.woff')}) format('woff'),
          url(${require('./assets/fonts/SSShinb7/SSShinb7.otf')}) format('opentype');
  }
`;

export default FontSetting;