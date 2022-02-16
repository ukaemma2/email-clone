import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import './SendMail.css'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/mailSlice';
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function SendMail() {
  const {register, handleSubmit, watch, formState: {errors}} = useForm()
  const dispatch = useDispatch()

  const onSubmit = (formData) => {
    db.collection('email').add({
      to:formData.to,
      subject:formData.subject,
      message:formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    dispatch(closeSendMessage())
  }
  
  return <div className="sendmail">
    <div className="sendMail__header">
      <h3>New Message</h3>
      <Close 
        onClick={() => dispatch(closeSendMessage())}
        className='sendMail__close' 
      />
    </div>
    <form 
      onSubmit={handleSubmit(onSubmit)}
    >
      <input 
        placeholder='To' 
        type="email" 
        {...register('to', {required:true})}
        
      />
      {errors.to && <p className='sendMail__error'>To is required</p>}
      <input 
        placeholder="Subject" 
        type="text" 
        {...register('subject', {required:true})}
      /> 
      {errors.subject && <p className='sendMail__error'>Subject is required</p>}
      <input 
        placeholder="Message..." 
        type="text" 
        className='sendMail__message' 
        {...register('message', {required:true})}
      />
      {errors.message && <p className='sendMail__error'>Message is required</p>}
      <div className="sedMail__options">
        <Button className='sendMail__send' type="submit">Send</Button>
      </div>
    </form>
  </div>
}


export default SendMail;
