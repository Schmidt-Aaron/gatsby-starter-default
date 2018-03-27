import React from 'react'
import Link from 'gatsby-link'

let year = (new Date()).getFullYear();

const Footer = () => (  
  <footer>
    <p>
      Site By Aaron; Copyright {year}
    </p>
  </footer>

)

export default Footer;