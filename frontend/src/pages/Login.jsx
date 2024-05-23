import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik, validateYupSchema } from 'formik'
import { LoginSchema } from '../utils/validationSchema'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../components/Loading'
import { useLoginMutation } from '../redux/slices/userApiSlice'
import { toast } from 'react-toastify'
import { setUserCredentials } from '../redux/slices/authSlice'

const Login = () => {
  const { userInfo } = useSelector(state => state.auth)

  const [user, setUser] = useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()

  const handleLoginSubmit = async values => {
    console.log(values)
    try {
      const res = await login(values).unwrap()
      dispatch(setUserCredentials({ ...res }))
      navigate('/')
      toast.success('Login Successful', { position: 'bottom-center' })
      console.log(res)
    } catch (err) {
      toast.error(err?.data?.message || err.message, {
        position: 'bottom-center'
      })
      console.log(err)
    }
  }
  const {
    handleReset,
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched
  } = useFormik({
    initialValues: user,
    onSubmit: handleLoginSubmit,
    validationSchema: LoginSchema
  })

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [])

  return (
    <div
      className='d-flex w-100 justify-content-center align-items-center'
      style={{ height: '100vh' }}
    >
      <div className='w-50 section-colored rounded p-4'>
        <div className='d-flex justify-content-between items-center'>
          <h3 className='mb-4'>
            Sign<span> In</span>
          </h3>
          {isLoading && <Loading />}
        </div>

        <form className='row mb-0' onSubmit={handleSubmit}>
          <div className='form-group col-12'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
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
            <label htmlFor='author'>Password</label>
            <input
              type='password'
              size='22'
              name='password'
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              tabIndex='1'
              className='form-control'
              placeholder='Password'
            />
            <span className='text-danger'>
              {errors.password && touched.password ? errors.password : null}
            </span>
          </div>
          <div className='form-group col-12 mt-1 mb-0 d-flex justify-content-center'>
            <button
              name='submit'
              type='submit'
              id='submit-button'
              tabIndex='5'
              value='Submit'
              className='button button-large button-black w-100 button-dark text-transform-none fw-medium ls-0 button-rounded m-0'
            >
              {isLoading ? 'Logining...' : 'Sign In'}
            </button>
          </div>
        </form>
        <div className='mt-4'>
          You don't have an account <Link to='/register'>Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
