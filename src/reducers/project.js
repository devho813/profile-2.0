import produce from 'immer';

const initialStore = {
  projects: [
    {
      id: 1,
      title: 'Safety R3',
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
    },
    {
      id: 2,
      title: 'SBI Cosmoney',
      year: '2018',
      environment: 'WEB',
      position: '퍼블리싱 개발',
      siteLink: 'https://www.sbicosmoney.com',
      githubLink: '',
      technologies: ['HTML5', 'CSS3', 'Javscript', 'jQuery'],
      imagePaths: [
        require('../assets/images/project/sbicosmoney/project_sbicosmoney_1.png'),
        require('../assets/images/project/sbicosmoney/project_sbicosmoney_2.png'),
        require('../assets/images/project/sbicosmoney/project_sbicosmoney_3.png'),
        require('../assets/images/project/sbicosmoney/project_sbicosmoney_4.png'),
      ]
    },
    {
      id: 3,
      title: 'Vector Board',
      year: '2017',
      environment: 'WEB',
      position: '풀스택 개발 + 디자인',
      siteLink: 'https://www.youtube.com/watch?v=X_-5RJrhcNQ',
      githubLink: 'https://github.com/devho813/vector-board',
      technologies: ['HTML5', 'SVG', 'CSS3', 'Javscript', 'jQuery', 'node.js', 'socket.io', 'mysql'],
      imagePaths: [
        require('../assets/images/project/vectorboard/project_vectorboard_1.png'),
        require('../assets/images/project/vectorboard/project_vectorboard_2.png'),
        require('../assets/images/project/vectorboard/project_vectorboard_3.png'),
        require('../assets/images/project/vectorboard/project_vectorboard_4.png'),
      ]
    },
    {
      id: 4,
      title: 'Profile 1.0',
      year: '2018',
      environment: 'WEB',
      position: '프론트 개발 + 디자인',
      siteLink: 'https://devho813.github.io/profile/',
      githubLink: 'https://github.com/devho813/profile',
      technologies: ['HTML5', 'CSS3', 'Javscript', 'vue.js', 'Github Page'],
      imagePaths: [
        require('../assets/images/project/profile/project_profile_1.png'),
        require('../assets/images/project/profile/project_profile_2.png'),
        require('../assets/images/project/profile/project_profile_3.png'),
        require('../assets/images/project/profile/project_profile_4.png'),
        require('../assets/images/project/profile/project_profile_5.png'),
      ]
    },
    {
      id: 5,
      title: 'Profile 2.0',
      year: '2019',
      environment: 'WEB',
      position: '프론트 개발 + 디자인',
      siteLink: 'https://chanho.me',
      githubLink: 'https://github.com/devho813/profile-2.0',
      technologies: ['HTML5', 'CSS3', 'Javscript', 'React', 'Redux', 'Redux-Saga', 'immer', 'styled-components', 'Github Page'],
      imagePaths: [
        require('../assets/images/project/profile2/project_profile2_1.png'),
        require('../assets/images/project/profile2/project_profile2_2.png'),
        require('../assets/images/project/profile2/project_profile2_3.png'),
        require('../assets/images/project/profile2/project_profile2_4.png'),
        require('../assets/images/project/profile2/project_profile2_5.png'),
      ]
    },
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