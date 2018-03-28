import React from 'react'
import Link from 'gatsby-link'

let year = (new Date()).getFullYear();

const Footer = () => (  
  <footer
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <p>
      Site By Aaron; Copyright {year}
    </p>
  </footer>

)

export default Footer;