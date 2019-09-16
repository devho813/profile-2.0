import produce from 'immer';

const initialStore = {
  quote: "",
  author: "",
  tempQuote: "Are you tired? If you don't walk today, you should run tomorrow.",
  tempAuthor: "Carles Puyol"
}

export const QUOTE_REQUEST = 'QUOTE_REQUEST';
export const QUOTE_SUCCESS = 'QUOTE_SUCCESS';
export const QUOTE_FAIRURE = 'QUOTE_FAIRURE';

const reducer = (store = initialStore, action) => {
  return produce(store, (draft) => {
    switch(action.type){
      case QUOTE_REQUEST:
        break;
      case QUOTE_SUCCESS:
          draft.quote = action.data.content;
          draft.author = action.data.author;
        break;
      case QUOTE_FAIRURE:
          draft.quote = '';
          draft.author = '';
        break;
      default:
        break;
    }
  })
}

export default reducer;