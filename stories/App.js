// @flow

import type { Node } from 'react';
import React from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducers } from '../src';
import Tooltip from '../src/components/Tooltip';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [
  thunk,
];

type BaseProps = {
  children: Node,
};

const Base = ({ children }: BaseProps) => (
  <Provider
    store={createStore(combineReducers(reducers), composeEnhancers(
      applyMiddleware(
        ...middleware,
      ),
    ))}
  >
    <span>
      {children}
      <Tooltip />
    </span>
  </Provider>
);

export default Base;
