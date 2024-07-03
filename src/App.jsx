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
        <Header card={card } />
        <div className='Container'>
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
