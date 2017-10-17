import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import uuid from 'node-uuid';

import $ from 'jquery';

import Reducer  from './../lib/state/reducer';
import { createStore } from 'redux';

export default function(initialization, Component, register) {
  // activate keyboard shortcuts
  require('./../lib/presentation/keyboard-shortcuts').register();

  if (window){
    window.$ = $;
    window.jQuery = $;
  }

  require('./../lib/presentation/typeahead.jquery.js');

  var store = createStore(Reducer);
  store.dispatch(initialization);

  if (register){
      register(store);
  }

  return () => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>


    , document.getElementById('main'));

    register(store);
  };
}
