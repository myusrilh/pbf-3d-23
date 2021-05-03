import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import { Route, BrowserRouter as Router, Switch  } from 'react-router-dom';
import Header from './components/Header';
import routes from './components/routes';
import firebase from 'firebase/app';
import { firebaseConfig } from './firebase.config';

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

function App() {
const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{isLoggedIn, setLoggedIn}}>
      Is Logged in ? {JSON.stringify(isLoggedIn)}
      <div className="App">
        <Router>
          <Header/>

          <Switch>
            {routes.map(route =>(
              <Route
              key = {route.path}
              path = {route.path}
              exact = {route.exact}
              component = {route.main}
              />
            ))}
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
