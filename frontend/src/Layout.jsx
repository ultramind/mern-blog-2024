import React, { Children } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const Layout = ({ children }) => {
  return (
    <div id='wrapper'>
      {/* header */}
      <Header />
      <section id='content'>
        <div
          className='content-wrap'
          style={{
            overflow: 'visible',
            padding: '0px'
          }}
        >
          <div className='d-flex justify-content-center'>{children}</div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Layout
