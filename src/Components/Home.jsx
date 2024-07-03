import { useState } from 'react'
import data from '../assets/Products.json'
import './Home.css'
const Home = ({card,setCard}) => {
    const [Products] = useState(data);
  return (
      <div className='product-container'>
            {Products.map((product) => {
              const {id, fname, Amt, Shop, img} = product;
                
              
              const addcard = () => {
                  setCard([...card, product])
}
              const removecard = () => {
                setCard(card.filter((c) => c.id !== id))
              }
              
              return (
                  
                  <div key={id} className='product'>
                      <img src={img} alt={fname} style={{
                          height: '200px',
                          width: '200px',
                            border: '3px solid red',
                          padding : '10px'
                  }} />
                  
                      <h3>Food Name:{fname}</h3>
                      <p>Shop Name: {Shop }</p>
                  <p> Amount : ${Amt}</p>
                  {
                    card.includes(product) ? (
                        <button className='btnremove' onClick={removecard}>Remove From Card</button>
                    ) : (
                        <button className='btn' onClick={addcard}>Add To Card</button>
                    )
                  }
                  
                    
                      
                  </div>
            
  )
          })}
          
          
          
           

      </div>
      
  )
}

export default Home