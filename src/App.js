

import React from 'react';

import { Link } from "react-router-dom";
import './App.css';
import { Header } from './components/header/Header';
import EmailList from './components/mails/EmailList';
import Mail from './components/mails/Mail';
import Sidebar  from './components/sidebar/Sidebar';

function App() {
  return (
    
      <div className="App">
        <Header />
        <Sidebar />
        <div className="app__body">
          
          <Link path="/" element={<Mail />} />
          <Link path="/" element={<EmailList />} /> 
          
        </div>
      </div>
      
  );
}
export default App;
