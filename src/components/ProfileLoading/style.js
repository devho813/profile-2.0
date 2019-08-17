import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  h1 {
    height: 100px;
    text-align: center;
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  h1 span {
    position: relative;
    top: 20px;
    display: inline-block;
    animation: bounce .3s ease infinite alternate;
    font-family: 'Titan One', cursive;
    font-size: 80px;
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

  h1 span:nth-child(2) { animation-delay: .1s; }
  h1 span:nth-child(3) { animation-delay: .2s; }
  h1 span:nth-child(4) { animation-delay: .3s; }
  h1 span:nth-child(5) { animation-delay: .4s; }
  h1 span:nth-child(6) { animation-delay: .5s; }
  h1 span:nth-child(7) { animation-delay: .6s; }
  h1 span:nth-child(8) { animation-delay: .7s; }

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
`;