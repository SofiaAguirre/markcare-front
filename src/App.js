import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './components/Inicio';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
    <div className="container">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/' exact>
            <Inicio />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
