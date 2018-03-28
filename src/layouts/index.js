import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import './index.css'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Aaron Schmidt's Personal Website"
      meta={[
        { name: 'Aaron Schmidt Personal Website', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div 
      className="main-container"
      style={{
        display: 'flex',
        margin: '0 auto',
        justifyContent: 'space-between',
        maxWidth: 1200,
      }}
    >
      <div
        style={{
          margin: '2rem',
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
      <Sidebar />
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
