

import React from 'react';

import {  BrowserRouter  as Router,  Routes,  Route} from "react-router-dom";
import './App.css';
import { Header } from './components/header/Header';
import EmailList from './components/mails/EmailList';

import Sidebar  from './components/sidebar/Sidebar';
import Mail from './Mail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <div className="app__body">
        <Sidebar />
        <Mail />
        <EmailList />
          <Routes>
            <Route exact path="/" element={<Mail />} />
            <Route exact path="/" element={<EmailList />} /> 
          </Routes>
        </div>
      </div>
    </Router>  
  );
}
export default App;
