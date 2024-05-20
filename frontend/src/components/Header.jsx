import React, { useState } from 'react'
import MobileNav from './MobileNav'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../redux/slices/userApiSlice'
import { toast } from 'react-toastify'
import { logout } from '../redux/slices/authSlice'

const Header = () => {
  const { userInfo } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApi, { isLoading }] = useLogoutMutation()

  // handdle logout
  const handleLogout = async () => {
    try {
      const res = await logoutApi().unwrap()
      dispatch(logout())
      toast.success('Logout Successfully!', { position: 'bottom-center' })
      navigate('/login')
    } catch (err) {
      toast.error(err?.data?.message || err.message, {
        position: 'bottom-center'
      })
    }
  }
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
              {userInfo ? (
                <div className='dropdown dropdown-langs'>
                  <button
                    className='btn dropdown-toggle px-1 d-flex gap-4'
                    type='button'
                    id='dropdownMenuButton'
                    data-bs-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <div className='mr-8'>{userInfo?.firstname}</div>
                  </button>
                  <div
                    className='dropdown-menu dropdown-menu-end'
                    aria-labelledby='dropdownMenuButton'
                  >
                    <a href='#' className='dropdown-item'>
                      Emeka
                    </a>
                    <a href='#' className='dropdown-item'>
                      My Profile
                    </a>
                    <a href='#' className='dropdown-item'>
                      My Posts
                    </a>
                    <span className='dropdown-item' onClick={handleLogout}>
                      Logout
                    </span>
                  </div>
                </div>
              ) : (
                <Link to='/login'>Sign In</Link>
              )}
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
