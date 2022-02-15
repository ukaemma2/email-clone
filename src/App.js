import React from 'react';
import {  Routes,  Route} from "react-router-dom";
import './App.css';
import { Header } from './components/header/Header';
import EmailList from './components/mails/EmailList';
import SendMail from './components/sendMail/SendMail';
import Sidebar  from './components/sidebar/Sidebar';
import Mail from './Mail';
import {useSelector} from 'react-redux';
import {selectSendMessageIsOpened} from './features/mailSlice'

function App() {
  const sendMessageIsOpened = useSelector(selectSendMessageIsOpened)
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
     {sendMessageIsOpened && <SendMail />}
    </div>
  );
}
export default App;
