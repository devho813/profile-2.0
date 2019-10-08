import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

ReactDOM.render(<App />, document.getElementById('root'));

process.env.NODE_ENV === 'development' && module.hot.accept();