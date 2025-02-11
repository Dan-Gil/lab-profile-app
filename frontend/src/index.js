import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import './index.css';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import MyProvider from './context';

ReactDOM.render(
  <MyProvider>
    <Router />
  </MyProvider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
