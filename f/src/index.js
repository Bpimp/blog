import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import RouterIndex from './routes';
import Header from './components/main/header';
import Footer from './components/main/footer';
import './index.css';


let store=createStore(reducers,applyMiddleware(thunk));  
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Header/>
          <RouterIndex/>
        <Footer/>
      </div>
    </BrowserRouter>
  </Provider>
    ,
  document.getElementById('root')
);

