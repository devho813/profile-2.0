import produce from 'immer';

const initialStore = {
  quote: "He who has a 'why' to live, can bear with almost any 'how'.",
  author: 'Friedrich Nietzsche'
}

export const TEST_REQUEST = 'TEST_REQUEST';
export const TEST_SUCCESS = 'TEST_SUCCESS';

const reducer = (store = initialStore, action) => {
  return produce(store, (draft) => {
    switch(action.type){
      case TEST_REQUEST:
        break;
      case TEST_SUCCESS:
        break;
      default:
        break;
    }
  })
}

export default reducer;