import React from 'react'
import './input.css';


const Input = ( {mssg,setMssg,handleKey ,sendMessage } ) => {
  return (
        <form  className='form'>
                <input type="text"
                    className='input'
                    placeholder='Type a message...'
                    value={mssg}
                    onChange={(e)=>setMssg(e.target.value)} 
                    onKeyDown={handleKey} 
                    
                    />
                   
      
                


            <button type="submit" className='sendButton'  onClick={ (e)=> sendMessage(e) }> send</button>
        </form>



  )
}

export default Input