import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Loader from './components/Loader';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Loader />
  </React.StrictMode>,
  document.getElementById("root")
);