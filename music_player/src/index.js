import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Button from 'mdbreact'
// import {Button} from 'mdbreact';

const element=<App />

ReactDOM.render(
 element,
 document.getElementById('root'));
registerServiceWorker();
