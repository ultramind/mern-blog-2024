import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { SocialSchema, UpdateProfileSchema } from '../../utils/validationSchema'
import { useUpdateProfileMutation } from '../../redux/slices/userApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setUserCredentials } from '../../redux/slices/authSlice'
import { toast } from 'react-toastify'
import Loading from '../Loading'
import { useGetAllCategoriesQuery } from '../../redux/slices/categoryApiSlice'

const SocialCard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { userInfo } = useSelector(state => state.auth)

  const [social, setSocial] = useState({
    name: '',
    url: '',
    type: 'social'
  })

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
      initialValues: social,
      validationSchema: SocialSchema,
      onSubmit: handleUpdateProfileSubmit
    })
  return (
    <div className='d-flex w-100 justify-content-center'>
      <div className='w-100 section-colored rounded p-4'>
        <div className='d-flex justify-content-between items-center'>
          <h3 className='mb-4'>
            Social<span> Profile</span>
          </h3>
          {isLoading && <Loading />}
        </div>

        <form className='row mb-0' onSubmit={handleSubmit}>
          <div className='form-group col-12'>
            <label htmlFor='author'>Add Social</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <select
                className='form-control w-25'
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              >
                <option value='git'>Git</option>
                <option value='linkedin'>Linkedin</option>
                <option value='Twitter'>Twitter</option>
                <option value='portfolio'>Portfolio</option>
              </select>
              <input
                type='url'
                value={values.url}
                onBlur={handleBlur}
                onChange={handleChange}
                name='url'
                size='22'
                tabIndex='1'
                className='form-control'
                placeholder='Social Url here'
              />
              {isLoading ? (
                <Loading />
              ) : (
                <button
                  className='button button-small button-black button-dark button-rounded uil uil-plus'
                  type='submit'
                ></button>
              )}
            </div>
            <span className='text-danger'>
              {errors.url && touched.url ? errors.url : null}
            </span>
            {'/'}
            <span className='text-danger'>
              {errors.name && touched.name ? errors.name : null}
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SocialCard
