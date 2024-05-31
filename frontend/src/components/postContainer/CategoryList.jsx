import React, { useState } from 'react'
import { replace, useFormik } from 'formik'
import { CategorySchema } from '../../utils/validationSchema'
import { useSelector } from 'react-redux'
import AddCategory from '../AddCategory'
import Skeleton from 'react-loading-skeleton'
import { useGetAllCategoriesQuery } from '../../redux/slices/categoryApiSlice'
import SearchPost from '../SearchPost'

const CategoryList = ({ query, setQuery, isLoading: postLoading }) => {
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

      {userInfo && (
        <SearchPost query={query} setQuery={setQuery} isLoading={postLoading} />
      )}

      <div className='widget widget-nav mt-md-5'>
        <ul className='nav'>
          <li className={`nav-item ${query.category == '' && 'active'}`}>
            <span
              className='nav-link'
              style={{ cursor: 'pointer' }}
              onClick={() => setQuery({ ...query, category: '' })}
            >
              All Categories
            </span>
          </li>
          {categories?.map((cat, i) => (
            <li
              className={`nav-item ${
                query.category == cat.category && 'active'
              }`}
              key={i}
            >
              <span
                onClick={() =>
                  setQuery({ ...query, category: cat?.category, search: '' })
                }
                className='nav-link'
                href='#'
                style={{ cursor: 'pointer' }}
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
