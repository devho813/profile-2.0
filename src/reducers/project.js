import produce from 'immer';

const initialStore = {

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