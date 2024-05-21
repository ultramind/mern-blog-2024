import React, { Children } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const Layout = ({ children }) => {
  return (
    <div id='wrapper'>
      {/* header */}
      <Header />
      <section id='content'>
        <div className='content-wrap pt-5' style={{ overflow: 'visible' }}>
          <div className='container d-flex justify-content-center'>
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Layout
