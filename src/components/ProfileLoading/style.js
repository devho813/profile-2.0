import styled from 'styled-components'

export const LoadingContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1000;
  background-color: black;
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: skyblue;
  
  animation: LoadingWrapperHideAnim 2s ease 3.5s forwards;

  @keyframes LoadingWrapperHideAnim {
    0%{
      transform: translateY(0vh) scale(1);
    }
    35%{
      transform: translateY(-15vh) scale(0.55, 0.65) perspective(2000px) rotateX(40deg);
      opacity: 1;
    }
    100%{
      transform: translateY(100vh);
      opacity: 0;
    }
  }

  & > div.loading-wrapper{
    width: 100%;
    height: 100px;
    text-align: center;
    margin: 0;
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -45%);
  }
`;

export const FullNameLoading = styled.h1`
  min-width: 300px;
  user-select:none;

  span {
    position: relative;
    top: 20px;
    display: inline-block;
    animation: bounce .3s ease infinite alternate;
    font-family: 'Titan One', cursive;
    font-size: 4rem;
    color: #FFF;
    text-shadow: 0 1px 0 #CCC,
                0 2px 0 #CCC,
                0 3px 0 #CCC,
                0 4px 0 #CCC,
                0 5px 0 #CCC,
                0 6px 0 transparent,
                0 7px 0 transparent,
                0 8px 0 transparent,
                0 9px 0 transparent,
                0 10px 10px rgba(0, 0, 0, .4);
  }

  span:nth-child(2) { animation-delay: .1s; }
  span:nth-child(3) { animation-delay: .2s; }
  span:nth-child(4) { animation-delay: .3s; }
  span:nth-child(5) { animation-delay: .4s; }
  span:nth-child(6) { animation-delay: .5s; }
  span:nth-child(7) { animation-delay: .6s; }
  span:nth-child(8) { animation-delay: .7s; }
  & .last-name { margin-left: 15px; }

  @keyframes bounce {
    100% {
      top: -20px;
      text-shadow: 0 1px 0 #CCC,
                  0 2px 0 #CCC,
                  0 3px 0 #CCC,
                  0 4px 0 #CCC,
                  0 5px 0 #CCC,
                  0 6px 0 #CCC,
                  0 7px 0 #CCC,
                  0 8px 0 #CCC,
                  0 9px 0 #CCC,
                  0 50px 25px rgba(0, 0, 0, .2);
    }
  }
`

export const ProgressBar = styled.h1`
  display: inline-block;
  width: 300px;
  height: 3px;
  margin-top: 35px;
  background-color: white;

  div {
    width: 0px;
    height: 100%;
    background-color: #626262;
    animation: progressBarStateAnim 3.5s ease-in forwards;
    
    @keyframes progressBarStateAnim {
      to {
        width: 100%;
      }
    }
  }
`;