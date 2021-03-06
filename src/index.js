import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import  thunk  from "redux-thunk";
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import {getFirestore, reduxFirestore } from 'redux-firestore'
import ContactsReducer from "./store/ContactsReducer";
import firebase from '../Firebase/Firebase';


const store = createStore(ContactsReducer,
   compose (
   
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase),
   )
),

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
