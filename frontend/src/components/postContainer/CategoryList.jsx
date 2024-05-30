import React, { useState } from 'react'
import { replace, useFormik } from 'formik'
import { CategorySchema } from '../../utils/validationSchema'
import { useSelector } from 'react-redux'
import AddCategory from '../AddCategory'
import Skeleton from 'react-loading-skeleton'
import { useGetAllCategoriesQuery } from '../../redux/slices/categoryApiSlice'

const CategoryList = ({ category, setCategory }) => {
  const { userInfo } = useSelector(state => state.auth)
  const { data: categories, isLoading } = useGetAllCategoriesQuery()

  //fetch by category
  const filterPosts = data => {
    setCategory(data)
  }

  return (
    <div
      className='col-lg-3 cat-widgets position-sticky h-100'
      style={{ top: '234px' }}
    >
      {/* categories section */}
      {userInfo?.isAdmin === true && <AddCategory />}

      <div className='widget widget-nav mt-md-5'>
        <ul className='nav'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              All Categories
            </a>
          </li>
          {categories?.map((cat, i) => (
            <li className='nav-item' key={i}>
              <span
                onClick={() => setCategory(cat.category)}
                className='nav-link cursor-pointer'
                href='#'
              >
                {cat.category || <Skeleton />}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CategoryList
