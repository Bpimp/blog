import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import RouterIndex from './routes';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <RouterIndex />
    </div>
  </BrowserRouter>
    ,
  document.getElementById('root')
);

serviceWorker.unregister();
