import React from 'react'
import Link from 'gatsby-link'

const Sidebar = () => (
  <aside id="sidebar"
    style={{
      margin: '2rem',
    }}
  >
    <section id="widget_1">
      <h2 className="sidebar--widget-title">
        About Me
      </h2>
      <p>Are you curious yet? <Link to="/about">Learn more</Link></p>
    </section>
    <section id="widget_2">
      <h2 className="sidebar--widget-title">
        Another Sidebar Title
      </h2>
      <p>lorem Ipsum and etc here</p>
    </section>
    
  </aside>  
)

export default Sidebar