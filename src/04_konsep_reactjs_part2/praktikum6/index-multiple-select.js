import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ['semangka', 'mangga'] };
  }

  handleChange = (e) => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({ value: value });
  }

  handleSubmit = (event) => {
    alert('Halo, ' + this.state.value + ' !');
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pilih buah favorit Anda:
          <select multiple={true} value={this.state.value} onChange={this.handleChange}>
            <option value="anggur">Anggur</option>
            <option value="jeruk">Jeruk</option>
            <option value="semangka">Semangka</option>
            <option value="mangga">Mangga</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
