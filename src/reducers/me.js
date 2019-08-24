import produce from 'immer';

const initialStore = {
  name: 'Chanho Lee',
  jobNames: ['FRONT-END DEVELOPER', 'JAVASCRIPT DEVELOPER'],
  basedIn: 'Seoul, Korea',
  aboutMe: `저는 자바스크립트를 좋아하는 프론트엔드 개발자입니다.\n
  18년도 1월부터 실무를 시작하였고 퍼블리싱을 시작으로 Angular 2+, Vue.js 를 거쳐 현재는 React 에 푹 빠져있습니다.\n
  클라이언트 최적화에 관심이 많고 직관적이면서 화려한 애니메이션, 스타일 효과를 불어 넣는 것을 좋아합니다.\n
  또 최신 개발 트렌드에 관심이 많고 하나에 꽂히면 끝을 볼 때까지 파고드는 성격입니다. 그리고 축구를 좋아합니다.\n`,
  contactInfos: [
    ['phone', '+82 10-6505-6531'],
    ['github', 'https://github.com/devho813'],
    ['gmail', 'devho813@gmail.com'],
    ['kakaoTalk', '차노@HO813'],
  ]
}

export const A = 'A';

const reducer = (store = initialStore, action) => {
  return produce(store, (draft) => {
    switch(action.type){
      case A:
        break;
      default:
        break;
    }
  })
}

export default reducer;