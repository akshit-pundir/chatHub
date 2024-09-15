import React from 'react';
import { Link } from 'react-router-dom';
import './join.css';


const Join = () => {

  const [name,setName]=React.useState('');
  const [room,setRoom]=React.useState('');

  return (

    <div className='joinOuterContainer'>

        <div className="joinInnerContainer">
            <h1 className='heading'> Join </h1>

            <div> 
             <input type="text" placeholder='Enter You Name' className='joinInput'  onChange={(e)=> setName(nm=>e.target.value) }  /> 
            </div>
           
            <div> 
              <input type="text" placeholder='Enter th name of the Room' className='joinInput mt-20' onChange={(e)=> setRoom(rm=>e.target.value) }  />
            </div>

            <Link  onClick={e => ( !name || !room) ? e.preventDefault() : null }  to={`/chat?name=${name}&room=${room}`}  >
              <button className='button mt-20' type='submit'>Sign In</button>
              </Link>

        </div>
      
      </div>

 
 
  )
}

export default Join;