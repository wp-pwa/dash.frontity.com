import React from 'react';
import ReactDOM from 'react-dom';
import { setStore } from 'mobx-react-wrapper/dist/mobx-react-wrapper.js';
import App from '../App';
import store from '../../store';

setStore(store);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
