import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

function Navbar() {
  return (
    <nav>
        <div className='navDiv'>
            <div className='navLogo'><p>Studio</p></div>
            <div className='navList'>
                <ul>
                   <Link to={"/"}> <li>Home</li></Link>
                     <Link to={"/addpage"}><li>Add Page</li></Link>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar