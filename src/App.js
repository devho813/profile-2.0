import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import Profile from './components/Profile';

import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../src/modules';
import { Provider } from 'react-redux' ;
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../src/sagas';
import 'intersection-observer';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : compose(
      applyMiddleware(...middlewares),
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    );
const store = createStore(rootReducer, {}, enhancer);
sagaMiddleware.run(rootSaga);

console.log(`
    █████╗██╗    ██╗█████╗  ███╗   ██╗    ██╗    ██╗   █████╗
  ██╔════╝██║    ██║██╔══██╗████╗  ██║    ██║    ██║ ██╔════██╗
  ██║     █████████║███████║██╔██╗ ██║    █████████║ ██║    ██║
  ██║     ██╔═══╗██║██╔══██║██║╚██╗██║    ██╔═══╗██║ ██║    ██║
  ╚═█████╗██║   ║██║██║  ██║██║ ╚████║    ██║   ║██║ ╚═█████╔═╝
    ╚════╝╚═╝   ╚══╝        ╚═╝  ╚═══╝    ╚═╝   ╚══╝   ╚════╝
`)

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Profile />
      </Provider>
    </>
  )
}

export default App;