import logo from './logo.svg';
import './App.css';
import React from "react";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Beranda(){
  return <h2>Beranda</h2>
}

function Berita(){
  return <h2>Berita</h2>
}

function Tentang(){
  return(
    <div>
      <h2>Tentang</h2>
      <h3>NIM: 1841720184</h3>
      <h3>Nama: Muhammad Yusril Hasriansyah</h3>
    </div>
  );
}

export default function App(){
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/berita">Berita</Link>
            </li>
            <li>
              <Link to="/tentang">Tentang</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/berita">
            <Berita />
          </Route>
          <Route path="/tentang">
            <Tentang />
          </Route>
          <Route path="/">
            <Beranda />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
