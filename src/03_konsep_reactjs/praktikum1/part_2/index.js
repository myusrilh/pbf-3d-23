import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function formatNama (user) {
  return user.nim + ' - ' + user.nama;
}

const user = {
  nim: '1841720184',
  nama: 'Muhammad Yusril Hasriansyah'
};

const element = (
  <h1>
    Halo, {formatNama(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
