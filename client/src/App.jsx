import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';


const App = () => (
    <BrowserRouter>
        <Routes>
          <Route path='/'   element={ <Join/> } />
          <Route path='/chat'   element={ <Chat/> } />
        </Routes>
   
   </BrowserRouter>
  
)

export default App;