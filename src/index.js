import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from "./state/store/index";
import { Provider } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faEnvelope} />
const store = configureStore() ; 
console.log("store : " , store.getState() ) ; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}  >  
  <React.StrictMode>
    <App  />
  </React.StrictMode>
  </Provider>
);