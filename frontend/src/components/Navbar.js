import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

const Navbar = () => {
  return (
    <div>
        <div className="container">
            <Link to="/">
                <h1>Workout Buddy</h1>
            </Link>
            <Link to="/">
                <h2>Home</h2>
            </Link>
        </div>
    </div>
  )
}

export default Navbar