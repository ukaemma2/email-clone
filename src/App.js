

import React from 'react';

import {  Routes,  Route} from "react-router-dom";
import './App.css';
import { Header } from './components/header/Header';
import EmailList from './components/mails/EmailList';

import Sidebar  from './components/sidebar/Sidebar';
import Mail from './Mail';

function App() {
  return (
   
      <div className="App">
        <Header />
        
        <div className="app__body">
        <Sidebar />
        <EmailList /> 
          <Routes>
            <Route exact path="/" element={<Mail />} />
            <Route exact path="/" element={<EmailList />} /> 
          </Routes>
        </div>
      </div>
      
  );
}
export default App;
