import styled from 'styled-components';
import { media } from '../../GlobalStyle';

export const FishWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 20px;
  
  animation: swim 20s infinite linear;
  @keyframes swim {
    from{
      transform: translateX(-160px);
    }
    to{
      transform: translateX(110vw);
    }
  }

  /* fish 1 */
  & > img {
    position: absolute;
    width: 40px;
    ${media.tablet`
      width: 35px;
    `}
    animation: bounce 2s infinite linear;
    filter: blur(1px);

    @keyframes bounce {
      0%, 50%, 100% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(-6px);
      }
      75% {
        transform: translateY(-3px);
      }
    }
  }
  
  & > img:nth-child(1) { left: 0; top: 0; }
  & > img:nth-child(2) { left: 40px; top: 50px; animation-delay: 0.5s;}
  & > img:nth-child(3) { left: 60px; top: 10px; animation-delay: 0.2s;}
  & > img:nth-child(4) { left: 120px; top: 20px; animation-delay: 0.4s;}
  & > img:nth-child(5) { left: 100px; top: 70px; animation-delay: 0.1s;}
  & > img:nth-child(6) { left: 30px; top: 90px; animation-delay: 0.3s;}
`;

export const FishWrapper2 = styled.div`
  position: absolute;
  right: 10vw;
  bottom: 40px;
  z-index: 4;

  /* fish */
  & > img {
    position: absolute;
    width: 90px;
    animation: bounce2 9s infinite linear;

    @keyframes bounce2 {
      0%, 50%, 100% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(-30px);
      }
      75% {
        transform: translateY(-20px);
      }
    }

    ${media.tablet`
      width: 70px;
    `}
    ${media.mobile`
      width: 55px;
    `}
  }
  
  & > img:nth-child(1) { right: 0; bottom: 0; }
  & > img:nth-child(2) { right: 120px; bottom: 60px; animation-delay: 2s;}
`;

export const FishWrapper3 = styled.div`
  position: absolute;
  right: 0;
  bottom: 30%;

  animation: swim3 12s infinite linear;
  @keyframes swim3 {
    0%, 35%{
      transform: translate(450px, 0);
    }
    50%{
      transform: translate(-110vw, 200px);
    }
    51%, 85%{
      transform: scale(1, -1) rotate(180deg) translate(180vw, -200px);
    }
    100%{
      transform: scale(1, -1) rotate(180deg) translate(0, 0);
    }
  }

  /* fish */
  & > img {
    position: absolute;
    width: 450px;
    animation: bounce3 2s infinite linear;

    @keyframes bounce3 {
      0%, 50%, 100% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(-40px);
      }
      75% {
        transform: translateY(-30px);
      }
    }
    ${media.tablet`
      width: 350px;
    `}
    ${media.mobile`
      width: 280px;
    `}
  }
  
  & > img:nth-child(1) { right: 0; bottom: 0; }
`;

export const FishWrapper4 = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;

  animation: swim4 15s infinite linear;
  @keyframes swim4 {
    0%{
      transform: translate(-15vw, 0);
    }
    35%{
      transform: translate(60vw, -30vh);
    }
    35.5%{
      transform: scale(1, -1) rotate(180deg) translate(-70vw, -30vh);
    }
    70%{
      transform: scale(1, -1) rotate(180deg) translate(-15vw, -38vh);
    }
    70.5%{
      transform: translate(5vw, -38vh);
    }
    80%, 100%{
      transform: translate(100vw, -15vh);
    }
  }

  /* fish */
  & > img {
    position: absolute;
    width: 130px;
    animation: bounce4 2s infinite linear;
    @keyframes bounce4 {
      0%, 50%, 100% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(-20px);
      }
      75% {
        transform: translateY(-10px);
      }
    }

    ${media.tablet`
      width: 100px;
    `}
  }
  
  & > img:nth-child(1) { left: 0; bottom: 0; }
`;

export const Light = styled.span`
  position: absolute;
  display: inline-block;
  left: 120px;
  top: -68px; 
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 3px -3px 60px 60px rgba(255,235,59,0.4);

  animation: bounce4 2s infinite linear;

  @keyframes bounce4 {
    0%, 50%, 100% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-20px);
    }
    75% {
      transform: translateY(-10px);
    }
  }

  ${media.tablet`
    left: 90px;
    top: -54px;
  `}
`;
