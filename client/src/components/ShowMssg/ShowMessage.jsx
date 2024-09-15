import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';
import './showmssg.css';

const ShowMessage = ({messages,nm}) => {
  return (
            <ScrollToBottom className="messages" >
                 {  messages.map( (msg,i)=><div key={i}> <Message  msg={msg} name={nm} />  </div>)}   

            </ScrollToBottom>
  )
}

export default ShowMessage