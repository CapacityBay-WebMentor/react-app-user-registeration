import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Ken_login from './Components/Login/CalliLogin';
import Header from './Components/Header';
import Landing from './Components/Hompages/Landing';
import CalliLogin from './Components/Login/CalliLogin';



ReactDOM.render(
  <React.StrictMode>
    <CalliLogin />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
