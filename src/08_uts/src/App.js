// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import React from 'react';

import Navbar from './layouts/navbar/index';
import Footer from './layouts/footer/index';
import AboutPage from './pages/aboutpage/index';
import HomePage from './pages/homepage/index';
import ContactPage from './pages/contact/index';
import BlogPage from './pages/blog/index';

import './assets/css/templatemo-style.css';
import './assets/css/bootstrap.min.css';

function Home(){
  return <HomePage/>;
}

function About(){
  return <AboutPage/>;
}
function Blog(){
  return <BlogPage/>;
}
function Contact(){
  return <ContactPage/>;
}

// function Footer(){
//   return(
//     <Provider store={store}>
//       <FooterTemplate/>
//     </Provider>
//   );
// }

export default function App(){
  return(
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
    </Switch>
    <Footer/>
    </Router>
  );
};
