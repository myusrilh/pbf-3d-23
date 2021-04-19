import logo from './logo.svg';
import './App.css';
import React from "react";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
import NavbarTemplate from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import 'bootstrap/dist/css/bootstrap.css';

const App = () =>{
  return(
    <Router>
      <NavbarTemplate/>
      <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/blog">
            <BlogPost />  
          </Route>
          <Route path="/">
            <Home />  
          </Route>
      </Switch>
    </Router>
  );
}

export default App;