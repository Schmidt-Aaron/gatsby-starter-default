import React from 'react'
import Link from 'gatsby-link'

let year = (new Date()).getFullYear();

const Footer = () => (  
  <footer
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <p>
    &copy; {year} Aaron Schmidt - All Rights Reserved. 
    </p>
    <p>Built with React and Gatsby</p>
  </footer>

)

export default Footer;