import React, { useState } from 'react'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Home from './Components/Home'
import Card from './Components/Card'
import './App.css'

const App = () => {
  const [card , setCard] = useState([])
  return (
    <div>
      <BrowserRouter>
       <Header />
        <div className='Container' style={{
           //backgroundImage : 'url(https://repository-images.githubusercontent.com/684966026/e53255e0-a4b3-4af5-8067-4b471c1edb42)'
            //backgroundImage : 'url(https://static.airasia.com/design/images/flight/inflight-meal/ml-nlcb.jpg)'
        }}>
          <Routes>
            <Route path='/' element={<Home card={card} setCard={ setCard} />} />
            <Route path='/cart' element= {<Card  card={card} setCard={ setCard}/>} />
         </Routes>
       </div>
      
      
      </BrowserRouter>
    
   
    </div>
  )
}

export default App
