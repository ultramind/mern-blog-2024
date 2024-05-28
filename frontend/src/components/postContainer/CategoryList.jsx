import React, { useState } from 'react'
import { useFormik } from 'formik'
import { CategorySchema } from '../../utils/validationSchema'
import { useSelector } from 'react-redux'

const CategoryList = () => {
  const { userInfo } = useSelector(state => state.auth)
  const [data, setData] = useState({ category: '' })

  const handleAddCategory = async values => {
    console.log(values)
  }

  const { errors, handleBlur, handleChange, touched, values, handleSubmit } =
    useFormik({
      initialValues: data,
      validationSchema: CategorySchema,
      onSubmit: handleAddCategory
    })

  console.log('Errors', errors)
  return (
    <div
      className='col-lg-3 cat-widgets position-sticky h-100'
      style={{ top: '234px' }}
    >
      {userInfo?.isAdmin !== true && (
        <div className='widget widget-search'>
          <form className='input-group mb-0' onSubmit={handleSubmit}>
            <input
              className='form-control'
              type='text'
              id='category'
              name='category'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.category}
              placeholder='Add category'
            />
            <button
              className='btn btn-outline-secondary uil uil-plus'
              type='submit'
            >
              Add
            </button>
          </form>
          <span className='text-danger mt-0'>
            {errors.category && touched.category ? errors.category : null}
          </span>
        </div>
      )}

      <div className='widget widget-nav mt-md-5'>
        <ul className='nav'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              All Categories
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Fashion
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Arts &amp; Culture
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Family
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Beauty
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Fitness
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Music
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Design &amp; Illustrations
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CategoryList
