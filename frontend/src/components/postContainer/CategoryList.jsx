import React, { useState } from 'react'
import { useFormik } from 'formik'
import { CategorySchema } from '../../utils/validationSchema'

const CategoryList = () => {
  const [category, setCategory] = useState({ category: ' ' })

  const handleAddCategory = async category => {}

  const { errors, handleBlur, handleChange, touched, values, handleSubmit } =
    useFormik({
      initialValues: category,
      validationSchema: CategorySchema,
      onSubmit: handleAddCategory
    })
  return (
    <div
      className='col-lg-3 cat-widgets position-sticky h-100'
      style={{ top: '234px' }}
    >
      <div className='widget widget-search' onSubmit={handleSubmit}>
        <form className='input-group'>
          <input
            className='form-control'
            type='search'
            name='category'
            value={values.category}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder='Add category'
            aria-label='Search'
          />
          <button
            className='btn btn-outline-secondary uil uil-search'
            type='submit'
          ></button>
        </form>
        <span className='text-danger'>
          {errors.name && touched.name ? errors.name : null}
        </span>
      </div>

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
