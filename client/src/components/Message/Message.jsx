import React from 'react'
import './message.css';
const Message = ({msg,name}) => {

    let isSendByCurrentUser=false;
    const trimmedName=name.trim().toLowerCase();

        if(msg.user===trimmedName){
             isSendByCurrentUser=true;

        }

  return (
    isSendByCurrentUser ? (
        <div className='messageContainer justifyEnd'>
            <p className='sentText pr-10' > {trimmedName} </p>
            <div className='messageBox backgroundBlue'>
                <p  className='messagText colorWhite'> {msg.text} </p>
            </div>
        </div>
    ): (
        <div className='messageContainer justifyStart'>
            <div className='messageBox backgroundLight'>
                 <p  className='messagText colorDark'> {msg.text} </p>
            </div>
        <p className='sentText pl-10' > {msg.user} </p>
    </div>
    )


  )
}

export default Message