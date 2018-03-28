import React from 'react'
import Link from 'gatsby-link'
import Nav from '../Nav'

const Header = () => (
  <header>
    <div
      style={{
        margin: '0 auto',
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
          Gatsby
        </Link>
      </h1>
    </div>
    <Nav />
  </header>
)

export default Header
