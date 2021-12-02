
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import { Header } from './components/header/Header';
import EmailList from './components/mails/EmailList';
import Mail from './components/mails/Mail';
import Sidebar  from './components/sidebar/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <div className="app__body">
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route>
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
