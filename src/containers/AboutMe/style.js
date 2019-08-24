import styled from 'styled-components';

export const AboutMeWrapper = styled.section`
  width: 100%;
  text-align: center;
  padding: 90px 0;

  h1{
    position: relative;
    font-weight: 400;
  }
  
  h2{
    margin-top: 50px;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const DecoBar = styled.span`
  display: block;
  margin: 20px auto 0;
  width: 100px;
  height: 1px;
  border-bottom: 1px solid skyblue;
`;

export const AboutMeContent = styled.article`
  font-size: 0.9rem;
  line-height: 1.4rem;
  letter-spacing: .5px;
  font-weight: 300;
  font-style: normal;
  margin-top: 40px;
`;

export const ContactInfoList = styled.ul`
  margin-top: 30px;

  /* ContactInfoItem */
  li { 
    display: inline-block;
    margin: 0 10px;
    width: 60px;
    height: 60px;
    line-height: 70px;
    cursor: pointer;

    img {
      width: 70%;
      height: 70%;
      vertical-align: middle;
    }
  }
`;

export const ContactInfoPopup = styled.div`

`;