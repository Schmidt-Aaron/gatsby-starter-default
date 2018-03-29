import React from 'react'
import Link from 'gatsby-link'
import Nav from '../Nav'

const Header = () => (
  <header
    style ={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: 1200,
      margin: '0 auto',
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          My Awesome<sup><a href="#" data-tooltip="Well, my mom thinks it is pretty cool..."
          style={{
            textDecoration: 'None',
          }}
          className="tooltip-bottom"
          >*</a></sup> Site
        </Link>
      </h1>
    </div>
    <Nav />
  </header>
)

export default Header
