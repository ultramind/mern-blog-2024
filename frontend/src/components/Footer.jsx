import React from 'react'

const Footer = () => {
  return (
    <footer id='footer'>
        <hr/>
      <div id='copyrights '>
        <div className='container'>
          <div className='row align-items-center justify-content-between col-mb-30'>
            <div className='col-lg-auto text-center text-lg-start'>
              Copyrights &copy; 2023 All Rights Reserved by Canvas Inc.
              <br />
              <div className='copyright-links'>
                <a href='#'>Terms of Use</a> / <a href='#'>Privacy Policy</a>
              </div>
            </div>

            <div className='col-lg-auto text-center text-lg-start'>
              <div className='copyrights-menu copyright-links m-0'>
                <a href='#'>Home</a>/<a href='#'>About</a>/
                <a href='#'>Features</a>/<a href='#'>Portfolio</a>/
                <a href='#'>FAQs</a>/<a href='#'>Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
