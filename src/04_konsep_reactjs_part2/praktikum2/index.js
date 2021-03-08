import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function SambutanUser (props) {
  return <h1>Selamat Datang 1841720184 - Muhammad Yusril Hasriansyah!</h1>;
}

function SambutanTamu (props) {
  return <h1>Mohon melakukan sign up terlebih dahulu.</h1>;
}

function Sambutan (props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <SambutanUser />;
  }
  return <SambutanTamu />;
}

ReactDOM.render(
  // Silakan coba ganti nilai isLoggedIn={false}
  <Sambutan isLoggedIn={false} />,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
