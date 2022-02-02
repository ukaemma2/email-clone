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
        <Routes>
          <Route exact path="/" element={<EmailList />} /> 
          <Route exact path="/mail" element={<Mail />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
