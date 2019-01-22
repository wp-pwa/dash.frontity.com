import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import { setStore } from 'mobx-react-wrapper/dist/mobx-react-wrapper.js';
import store from './store';
import * as serviceWorker from './serviceWorker';

setStore(store);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
