import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { RegisterSchema } from '../utils/validationSchema'
import { useRegisterMutation } from '../redux/slices/userApiSlice'
import { useDispatch } from 'react-redux'
import { setUserCredentials } from '../redux/slices/authSlice'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    stack: '',
    password: ''
  })

  const [register, { isLoading }] = useRegisterMutation()

  const handleRegisterSubmit = async values => {
    try {
      const res = await register(values).unwrap()
      dispatch(setUserCredentials({ ...res }))
      navigate('/')
      toast.success('Registration successfully', { position: 'bottom-center' })
    } catch (err) {
      toast.error(err?.data?.message || err.message, {
        position: 'bottom-center'
      })
      console.log(err)
    }
  }

  const { handleBlur, handleSubmit, handleChange, touched, values, errors } =
    useFormik({
      initialValues: user,
      validationSchema: RegisterSchema,
      onSubmit: handleRegisterSubmit
    })
  return (
    <div
      className='d-flex w-100 justify-content-center align-items-center'
      style={{ height: '100vh' }}
    >
      <div className='w-50 section-colored rounded p-4'>
        <div className='d-flex justify-content-between items-center'>
          <h3 className='mb-4'>
            Sign<span> Up</span>
          </h3>
          {isLoading && <Loading />}
        </div>

        <form className='row mb-0' onSubmit={handleSubmit}>
          <div className='form-group col-12'>
            <label htmlFor='author'>First Name</label>
            <input
              type='text'
              value={values.firstname}
              onBlur={handleBlur}
              onChange={handleChange}
              name='firstname'
              size='22'
              tabIndex='1'
              className='form-control'
              placeholder='Enter Firstname'
            />
            <span className='text-danger'>
              {errors.firstname && touched.firstname ? errors.firstname : null}
            </span>
          </div>
          <div className='form-group col-12'>
            <label htmlFor='author'>Last Name</label>
            <input
              type='text'
              value={values.lastname}
              onBlur={handleBlur}
              onChange={handleChange}
              name='lastname'
              size='22'
              tabIndex='1'
              className='form-control'
              placeholder='Enter Lastname'
            />
            <span className='text-danger'>
              {errors.lastname && touched.lastname ? errors.lastname : null}
            </span>
          </div>
          <div className='form-group col-12'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              name='email'
              size='22'
              tabIndex='2'
              className='form-control'
              placeholder='Your Email'
            />
            <span className='text-danger'>
              {errors.email && touched.email ? errors.email : null}
            </span>
          </div>
          <div className='form-group col-12'>
            <label htmlFor='author'>Stack</label>
            <select
              className='form-control'
              name='stack'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.stack}
            >
              <option value=''>Select your Stack</option>
              <option value='UI&UX'>UI & UX</option>
              <option value='frontend dev'>Frontend Dev</option>
              <option value='backend dev'>Backend Dev</option>
              <option value='fullstack dev'>Fullstack Dev</option>
              <option value='Dev Ops'>Dev Ops</option>
            </select>
          </div>

          <div className='form-group col-12'>
            <label htmlFor='author'>Password</label>
            <input
              type='password'
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              name='password'
              size='22'
              tabIndex='1'
              className='form-control'
              placeholder='Password'
            />
            <span className='text-danger'>
              {errors.password && touched.password ? errors.password : null}
            </span>
          </div>
          <div className='form-group col-12'>
            <label htmlFor='author'>Confirm Password</label>
            <input
              type='password'
              value={values.confirmPassword}
              onBlur={handleBlur}
              onChange={handleChange}
              name='confirmPassword'
              size='22'
              tabIndex='1'
              className='form-control'
              placeholder='Confrim Password'
            />
            <span className='text-danger'>
              {errors.confirmPassword && touched.confirmPassword
                ? errors.confirmPassword
                : null}
            </span>
          </div>
          <div className='form-group col-12 mt-1 mb-0 d-flex justify-content-center'>
            <button
              name='submit'
              type='submit'
              tabIndex='5'
              value='Submit'
              className='button button-large button-black w-100 button-dark text-transform-none fw-medium ls-0 button-rounded m-0'
            >
              {isLoading ? 'Submiting...' : 'Submit'}
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
