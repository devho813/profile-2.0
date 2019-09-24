import produce from 'immer';

const initialStore = {
  firstName: 'Chanho',
  lastName: 'Lee',
  // jobNames: ['FRONT-END DEVELOPER', 'JAVASCRIPT DEVELOPER'],
  jobNames: ['Front End Developer', 'Javascript Developer'],
  basedIn: 'Seoul, Korea',
  aboutMe: `저는 자바스크립트를 좋아하는 프론트엔드 개발자입니다.\n
  소프트웨어학과를 졸업하고 18년도 1월부터 실무를 시작하였습니다.\n
  Angular 2+, Vue.js 를 거쳐 현재는 React에 푹 빠져있습니다.\n
  클라이언트 최적화에 관심이 많고 직관적이면서 화려한 애니메이션, 스타일 효과를 불어 넣는 것을 좋아합니다.\n
  또 최신 개발 트렌드에 관심이 많고 하나에 꽂히면 끝을 볼 때까지 파고드는 성격입니다. 그리고 축구를 좋아합니다.\n`,
  contactInfos: [
    ['phone', '+82 10-6505-6531'],
    ['github', 'https://github.com/devho813'],
    ['gmail', 'devho813@gmail.com'],
    ['kakaoTalk', '차노@HO813'],
  ],
  technologies: [
    {
      id: 1,
      techName: 'html5',
      description: `2015년도부터 사용하였습니다.\n
        웹 표준, 웹 접근성을 준수하여 개발이 가능합니다. Canvas, SVG(졸업작품) 그래픽 기술을 활용한 프로젝트를 경험해 보았습니다.
      `
    },
    {
      id: 2,
      techName: 'css3',
      description: `2015년도부터 사용하였습니다.\n
        원하는 디자인, 레이아웃을 자유롭게 구현 할 수 있습니다. 유동형 레이아웃, 미디어 쿼리를 활용하여 반응형 웹사이트를 구현할 수 있습니다. 다양한 효과, 애니메이션을 적용하는 것을 좋아합니다. 크롬, 사파리, 파폭, 엣지, IE 10+ 까지 크로스 브라우징 경험이 있습니다.
      `
    },
    {
      id: 3,
      techName: 'javascript',
      description: `2015년도부터 사용하였습니다.\n
        가장 좋아하는 프로그래밍 언어입니다. 코어, 고급 문법을 꾸준히 학습하고 있고 브라우저 엔진에서 돌아가는 자바스크립트를 잘 이해하고 있습니다. jQuery, RapaelJS, c3.js 등등.. 다양한 오픈소스 활용하였습니다.
      `
    },
    {
      id: 4,
      techName: 'nodejs',
      description: `2017년도부터 사용하였습니다.\n
        백엔드 개발은 Java 언어로 시작하였으나, Javascript 언어를 더 선호하고 익숙하기 때문에 주력 백엔드 환경으로 사용하고 있습니다. 졸업작품과 개인 토이 프로젝트는 node.js 로 구현합니다.
      `
    },
    {
      id: 5,
      techName: 'git',
      description: `2018년도부터 사용하였습니다.\n
        주로 SourceTree와 VSC에서 제공하는 GUI 환경에서 Git을 활용하였습니다. 원격 저장소는 Gitlab, Github를 썼고 Jira와 Confluence를 연결하여 이슈 트래킹 하였습니다.
      `
    },
    {
      id: 6,
      techName: 'typescript',
      description: `2018년도부터 사용하였습니다.\n
        Angular 프레임워크에 사용한 언어로 2개의 프로젝트에서 약 1년 3개월 정도 사용하였습니다.
      `
    },
    {
      id: 7,
      techName: 'angular',
      description: `2018년도부터 사용하였습니다.\n
        첫 회사에서 사용한 프론트 프레임워크입니다. 약 1년 3개월 정도 사용하였습니다. SPA으로 개발했으며, 백엔드와 RESTful API 방식으로 데이터를 주고 받았습니다.
        컴포넌트, 디렉티브, 파이프, 서비스, 모듈 등 기본 기능들을 잘 이해하고 있고 활용할 수 있습니다.
        상태관리는 따로 라이브러리를 사용하지 않고 유사한 기능을 하는 컴포넌트를 묶은 service에서 rxjs를 활용하여 상태 관리하였습니다.
      `
    },
    {
      id: 8,
      techName: 'vue',
      description: `2018년도부터 사용하였습니다.\n
        vue 프레임워크는 3개월 정도 사용하였습니다. 첫 번째 포트폴리오 사이트를 vue로 작업하였으며 CDN 방식이 아닌 vue cli로 프로젝트를 구성했고 vuex를 활용하여 상태 관리하였습니다. 백엔드와의 통신은 axios를 사용했습니다.
      `
    },
    {
      id: 9,
      techName: 'webpack',
      description: `2018년도부터 사용하였습니다.\n
        create-react-app 같은 boilerplate를 사용하지 않고 직접 플러그인, loader들을 추가하여 개발 환경을 구축할 수 있습니다.`
    },
    {
      id: 10,
      techName: 'react',
      description: `2018년도부터 사용하였습니다.\n
        Javascript 프레임워크, 라이브러리 중 가장 좋아하는 라이브러리입니다. 현재 포트폴리오 사이트가 React로 개발되었습니다. React Hooks로 컴포넌트 짜는것을 선호합니다.
        상태관리는 Redux 라이브러리를 사용하고 있으며 사이드 이팩트 처리는 redux-saga 미들웨어를 사용합니다.
        검색엔진 최적화가 필요한 웹 사이트는 next.js를 사용합니다. 렌더링 최적화에 관심이 많습니다.
      `
    },
  ],
  allTechActiveState: false,
}

export const ACTIVE_TECHNOLOGIE_REQUEST = 'ACTIVE_TECHNOLOGIE_REQUEST';
export const LEAVE_TECHNOLOGIE_REQUEST = 'LEAVE_TECHNOLOGIE_REQUEST';

const reducer = (store = initialStore, action) => {
  return produce(store, (draft) => {
    switch(action.type){
      case ACTIVE_TECHNOLOGIE_REQUEST:
          draft.allTechActiveState = true;
        break;
      case LEAVE_TECHNOLOGIE_REQUEST:
          draft.allTechActiveState = false;
        break;
      default:
        break;
    }
  })
}

export default reducer;