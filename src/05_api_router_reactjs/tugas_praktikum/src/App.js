import logo from './logo.svg';
import './App.css';
import React from "react";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


function DaftarArtikel(props){
  return(
    <div>
      <h3>{props.judul}</h3>
      <div>{props.isiArtikel}</div>
    </div>
  );
}

class Berita extends React.Component{
  
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
          <hr/>
            {
            dataArtikel.map(artikel=>{
              return <DaftarArtikel key={artikel.id} judul={artikel.title} isiArtikel={artikel.body} />
            })
            }
        </div>
      );
    }

  }
}

function Beranda(){
  return <h2>Beranda</h2>
}

function Tentang(){
  return(
    <div>
      <h2>Tentang</h2>
      <hr/>
      <h3>NIM: 1841720184</h3>
      <h3>Nama: Muhammad Yusril Hasriansyah</h3>
      <h3>Alamat: Gresik</h3>
    </div>
  );
}

function Topik () {
  let { topicId } = useParams();
  return <h3>Topik yang terpilih: {topicId}</h3>;
}

function Codelabs () {
  let match = useRouteMatch();

  return (
    <div class="container">
      <h2>Codelabs</h2>
      <hr/>
      <div class="row">
        <div class="col-sm-6">
          <div class="btn btn-danger">
          <Link to={`${match.url}/konsep-reactjs`}>Konsep ReactJS</Link>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="btn btn-warning">
            <Link to={`${match.url}/belajar-react-router`}>Belajar React Router</Link>
          </div>
        </div>
      </div>

      {/* Pada halaman Codelabs ini memiliki <Switch> sendiri dengan beberapa route lagi
          di dalam URL /codelabs . Pada bagian route kedua merupakan route default atau
          jika tidak satu pun link topik dipilih. */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topik />
        </Route>
        <Route path={match.path}>
          <h3>Silakan Pilih Topik Codelab yang tersedia.</h3>
        </Route>
      </Switch>
    </div>
  );
}


export default function App () {
  return (
    <Router>

    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a class="navbar-brand" href="#">API dan Routing</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/">Beranda</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/berita">Berita</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/tentang">Tentang</Link>
          </li>
          <li class="nav-item">
              <Link class="nav-link" to="/codelabs">Codelabs</Link>
          </li>
        </ul>
      </div>
    </nav>


        <Switch>
          <Route path="/tentang">
            <Tentang />
          </Route>
          <Route path="/berita">
            <Berita />
          </Route>
          <Route path="/codelabs">
            <Codelabs />
          </Route>
          <Route path="/">
            <Beranda />
          </Route>
        </Switch>


    </Router>
  );
}
