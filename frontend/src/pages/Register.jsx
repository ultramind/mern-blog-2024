import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div
      className='d-flex w-100 justify-content-center align-items-center'
      style={{ height: '100vh' }}
    >
      <div className='w-25 section-colored rounded p-4'>
        <h3 className='mb-4'>
          Sign<span> Up</span>
        </h3>
        <form class='row mb-0' action='#' method='post' id='commentform'>
          <div class='form-group col-12'>
            <label for='author'>First Name</label>
            <input
              type='text'
              value=''
              size='22'
              tabindex='1'
              class='form-control'
              placeholder='Enter Firstname'
            />
          </div>
          <div class='form-group col-12'>
            <label for='author'>Last Name</label>
            <input
              type='text'
              value=''
              size='22'
              tabindex='1'
              class='form-control'
              placeholder='Enter Lastname'
            />
          </div>
          <div class='form-group col-12'>
            <label for='email'>Email</label>
            <input
              type='email'
              id='email'
              value=''
              size='22'
              tabindex='2'
              class='form-control'
              placeholder='Your Email'
            />
          </div>
          <div class='form-group col-12'>
            <label for='author'>Password</label>
            <input
              type='password'
              value=''
              size='22'
              tabindex='1'
              class='form-control'
              placeholder='Password'
            />
          </div>
          <div class='form-group col-12'>
            <label for='author'>Confirm Password</label>
            <input
              type='password'
              value=''
              size='22'
              tabindex='1'
              class='form-control'
              placeholder='Confrim Password'
            />
          </div>
          <div class='form-group col-12 mt-1 mb-0 d-flex justify-content-center'>
            <button
              name='submit'
              type='submit'
              id='submit-button'
              tabindex='5'
              value='Submit'
              class='button button-large button-black w-100 button-dark text-transform-none fw-medium ls-0 button-rounded m-0'
            >
              Register
            </button>
          </div>
        </form>

        <div className='mt-4'>
          You already have an account <Link to='/login'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Register
