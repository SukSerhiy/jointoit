import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import $ from 'jquery';


$(document).ready(
  () => {
    ReactDOM.render((
      <Provider store={configureStore()}>
        <App />
      </Provider>
  ), document.getElementById('root'))
});
