import React from 'react'
import Link from 'gatsby-link'

const Nav = () => (
  <nav>
    <Link 
      style={{
        marginLeft: '2rem',
      }} 
      to="/"
    >
      Home
    </Link>
    <Link
      style={{
        marginLeft: '2rem',
      }}
      to="/about/"
    >
        About
      </Link>
    <Link 
      style ={{
        marginLeft: '2rem',
      }}
      to="/contact/"
    >
        Contact
    </Link>
  </nav>
)

export default Nav
