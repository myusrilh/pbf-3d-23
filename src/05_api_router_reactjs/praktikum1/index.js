import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function DaftarArtikel(props){
  return(
    <div>
      <h3>{props.judul}</h3>
      <div>{props.isiArtikel}</div>
    </div>
  );
}

class Blog extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      dataArtikel:[]
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(
      (dataJson) => {
        this.setState({
          isLoaded: true,
          dataArtikel: dataJson
        })
      },
      (error)=>{
        this.setState({
          isLoaded: true,
          error
        });
      });
  }

  render(){
    const {error, isLoaded, dataArtikel} = this.state;

    if(error){
      return <div>Terjadi galat: {error.message}</div>
    }else if(!isLoaded){
      return <div>Sedang memuat...</div>
    }else{
      return(
        <div>
          <h2>Daftar Artikel</h2>
          {
            dataArtikel.map(artikel=>{
              return <DaftarArtikel judul={artikel.title} isiArtikel={artikel.body} />
            })
          }
        </div>
      );
    }

  }
}

ReactDOM.render(
  <React.StrictMode>
    <Blog />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
