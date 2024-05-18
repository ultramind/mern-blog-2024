import React, { useState } from 'react'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <div id='header' className='header-size-custom' data-sticky-shrink='false'>
      <div id='header-wrap'>
        <div className='container'>
          <div
            className='w-100 d-flex justify-content-between p-2'
            style={{ height: '60px' }}
          >
            {/* Logo */}
            <div className=''>
              <h2>UltraTech Blog</h2>
            </div>

            <div className=''>
              <div className='dropdown dropdown-langs'>
                <button
                  className='btn dropdown-toggle px-1 d-flex gap-4'
                  type='button'
                  id='dropdownMenuButton'
                  data-bs-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <div className='mr-8'>Akachukwu</div>
                </button>
                <div
                  className='dropdown-menu dropdown-menu-end'
                  aria-labelledby='dropdownMenuButton'
                >
                  <a href='#' className='dropdown-item'>
                    Akachukwu
                  </a>
                  <a href='#' className='dropdown-item'>
                    My Profile
                  </a>
                  <a href='#' className='dropdown-item'>
                    My Posts
                  </a>
                  <a href='#' className='dropdown-item'>
                    Logout
                  </a>
                </div>
              </div>
            </div>

            <div className='primary-menu-trigger'>
              <button
                className='cnvs-hamburger'
                type='button'
                title='Open Mobile Menu'
              >
                <span className='cnvs-hamburger-box'>
                  <span className='cnvs-hamburger-inner'></span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* mobile view */}
        <MobileNav />
      </div>
      <div className='header-wrap-clone'></div>
    </div>
  )
}

export default Header
