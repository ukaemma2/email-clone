

import React from 'react';

import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
import './App.css';
import { Header } from './components/header/Header';
import EmailList from './components/mails/EmailList';
import Mail from './components/mails/Mail';
import Sidebar  from './components/sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <EmailList />
        <div className="app__body">
          <Routes>
            <Route path="mail" element={<Mail />} />
            <Route path="emailList" element={<EmailList />} /> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>  
  );
}
export default App;
