import logo from './logo.svg';
import './App.css';
import React from "react";
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import BlogPost from './components/BlogPost.js';

const App = () =>{
  return(
    <div>
      <BlogPost />
    </div>
  );
}

export default App;