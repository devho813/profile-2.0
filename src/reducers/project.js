import produce from 'immer';

const initialStore = {
  projects: [
    {
      id: 1,
      title: 'Cube Safety R3',
      year: '2018 - 2019',
      environment: 'WEB',
      position: '프론트엔드 개발',
      siteLink: 'https://safetyr3.crscube.io',
      githubLink: '',
      technologies: ['HTML5', 'CSS3', 'Typescript', 'Angular', 'Rxjs'],
      imagePaths: [
        require('../assets/images/project/safetyr3/project_safetyr3_1.png'),
        require('../assets/images/project/safetyr3/project_safetyr3_2.png'),
        require('../assets/images/project/safetyr3/project_safetyr3_3.png'),
        require('../assets/images/project/safetyr3/project_safetyr3_4.png'),
      ]
    }
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