import produce from 'immer';
import {createAction, handleActions} from 'redux-actions';

const initialState = {
  quote: "",
  author: "",
  tempQuote: "Are you tired? If you don't walk today, you should run tomorrow.",
  tempAuthor: "Carles Puyol"
}

export const QUOTE_REQUEST = 'quote/QUOTE_REQUEST';
export const QUOTE_SUCCESS = 'quote/QUOTE_SUCCESS';
export const QUOTE_FAILURE = 'quote/QUOTE_FAILURE';

export const quoteRequest = createAction(QUOTE_REQUEST);
export const quoteSuccess = createAction(QUOTE_SUCCESS);
export const quoteFailure = createAction(QUOTE_FAILURE);


const quote = handleActions({
  [QUOTE_REQUEST]: (state, action) => 
    produce(state, draft => {}),
  [QUOTE_SUCCESS]: (state, action) => 
    produce(state, draft => {
      draft.quote = action.data.content;
      draft.author = action.data.author;
    }),
  [QUOTE_FAILURE]: (state, action) => 
    produce(state, draft => {
      draft.quote = '';
      draft.author = '';
    }),
}, initialState);

export default quote;