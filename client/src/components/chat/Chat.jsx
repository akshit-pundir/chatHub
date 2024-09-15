import React from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';
import Infobar from '../infobar/Infobar';
import Input from '../Input/Input';
import ShowMessage from '../ShowMssg/ShowMessage';
import TextContainer from '../TextContainer/TextContainer';
import './chat.css';
let socket;



const Chat = () => {
      const [name, setname] = React.useState('');
      const [room, setRoom] = React.useState('');
      const [mssg,setMssg] =React.useState('');
      const [users,setUsers]=React.useState('');
      const [messages,setMessages]=React.useState([]);


      // const ENDPOINT='http://localhost:3000';
      const ENDPOINT='https://chathub-ne7d.onrender.com';
      
      
      
      React.useEffect(()=>{
        const {name,room}=queryString.parse(location.search);
        socket = io(ENDPOINT);
        
        



          setname(name);
          setRoom(room);

          socket.emit('onJoin', {name,room},(error)=>{
            if(error){
                alert(error);
            }
          
          });

          return ()=>{
            socket.emit('disconnect');
            socket.off();
          }

        },[ENDPOINT, location.search]);

       React.useEffect(()=>{

          socket.on('mssg' ,(data)=>{
          console.log(data);
          setMessages((prevMessages) => [...prevMessages, data]);
        })

        socket.on('roomData',(data)=>{
            setUsers(data.users);

        })
         

       },[]); 

    
       const sendMessage=(event)=>{
            event.preventDefault();

          if(mssg){
           
              socket.emit('sendMssg' ,mssg,()=>setMssg(''))
          }

       }
    
       const handleKey=(event)=>{
         
         if(event.key==='Enter'){
          // event.preventDefault();
          sendMessage(event);
        }
           
      }

      console.log( 'mssg is:',  mssg);
      console.log(messages);

  return (

    <div className='outerContainer'>
      
      
      <div className='container'>
        <Infobar   room={room}/>
         <ShowMessage messages={messages} nm={name} />  
        <Input  mssg={mssg} setMssg={setMssg}  handleKey={handleKey}  sendMessage={sendMessage}/>

      </div>

       <TextContainer users={users}/> 


    </div>
  )


}

export default Chat;
