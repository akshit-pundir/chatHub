import React from 'react'
import onlineIcon from '../../assets/onlineIcon.png';
import './text.css';



const TextContainer = ({users}) => {
  return (
    <div className="textContainer">
    <div>
      <h1 style={{fontSize:'55px',fontWeight:'400',color:'black'}}>Welcome to  Chat Hub !!</h1>
      {/* <h2>Created By Akshit Pundir <span role="img" aria-label="emoji">😎</span></h2> */}
    </div>
    
    {
      users
        ? (
          <div>
            <h1 style={{fontWeight:'500',color:'black'}}>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
  )
}

export default TextContainer