import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'   

const Header = ({card }) => {
  return (
      <div className='navebar' style={{
          paddingLeft: '20px',
          
      }}>
          <div className='Logo'>Food Cart</div>
          <ul>
              <li>
                  <Link to='/'>Home</Link>
              </li> 
               <li>
          <Link to='/cart'><span className='count'>{card.length}</span>View Cart</Link>
              </li> 
      </ul>





    </div>
  )
}

export default Header