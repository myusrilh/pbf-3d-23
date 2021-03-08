import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../praktikum2/App';
import reportWebVitals from './reportWebVitals';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // binding ini dibutuhkan agar dapat bekerja ketika pemanggilan
  }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render () {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON - 1841720184' : 'OFF - Muhammad Yusril Hasriansyah'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
