import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import {store} from "./store"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
    document.getElementById('root')
);

reportWebVitals();
