import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import RouterIndex from './routes';
import './index.css';

let store=createStore(reducers);  
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <RouterIndex/>
      </div>
    </BrowserRouter>
  </Provider>
    ,
  document.getElementById('root')
);

