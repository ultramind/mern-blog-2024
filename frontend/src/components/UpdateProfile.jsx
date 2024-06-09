import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { UpdateProfileSchema } from '../utils/validationSchema'
import { useUpdateProfileMutation } from '../redux/slices/userApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setUserCredentials } from '../redux/slices/authSlice'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'
import { useGetAllCategoriesQuery } from '../redux/slices/categoryApiSlice'

const UpdateProfile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { userInfo } = useSelector(state => state.auth)

  const [user, setUser] = useState({
    firstname: userInfo.firstname,
    lastname: userInfo.lastname,
    email: userInfo.email,
    stack: userInfo.stack
  })

  const { data: categories } = useGetAllCategoriesQuery()

  const [updateProfile, { isLoading }] = useUpdateProfileMutation()

  const handleUpdateProfileSubmit = async values => {
    try {
      const res = await updateProfile(values).unwrap()
      console.log(res)
      dispatch(setUserCredentials({ ...res }))
      toast.success('Your profile updated', { position: 'bottom-center' })
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
      validationSchema: UpdateProfileSchema,
      onSubmit: handleUpdateProfileSubmit
    })
  return (
    <div className='d-flex w-100 justify-content-center'>
      <div className='w-full section-colored rounded p-4'>
        <div className='d-flex justify-content-between items-center'>
          <h3 className='mb-4'>
            Update<span> Profile</span>
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
              {categories?.map((cat, i) => (
                <option value={cat.category} key={i}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>

          <div className='form-group col-12 mt-1 mb-0 d-flex justify-content-center'>
            <button
              name='submit'
              type='submit'
              tabIndex='5'
              value='Submit'
              className='button button-large button-black w-100 button-dark text-transform-none fw-medium ls-0 button-rounded m-0'
            >
              {isLoading ? 'Updating...' : 'Update'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfile
