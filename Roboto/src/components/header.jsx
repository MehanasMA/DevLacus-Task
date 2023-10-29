import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './../App.css'
import { Link } from 'react-router-dom';


const header = () => {
  return (
    <nav>
    <div className='logo'>Roboto.
        </div>
        <ul>
            <li className='link-no-underline'><a href='/'>Home</a></li>
            <li>About</li>
            <li>Robots</li>
            <li>Contact</li>
        </ul>
        <div className='search'>
            <i className='fa-fa-search'></i>
            <i className='fa-fa-shopping-basket'></i>

        </div>
        <div className='add-button'>
<Link to='/add-tobo' className='add-robo-link'>Add Robo</Link>      </div>
        </nav>
  )
}

export default header