import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'
import { CategorySchema } from '../utils/validationSchema'
import { useAddCategoryMutation } from '../redux/slices/categoryApiSlice'

const SearchPost = ({ query, setQuery, isLoading }) => {
  const [search, setSearch] = useState('')

  const handleSearch = e => {
    e.preventDefault()
    setQuery({ ...query, category: '', search: search })
  }

  return (
    <div className='widget widget-search'>
      <form
        className='input-group mb-0 d-flex align-items-center gap-2'
        onSubmit={handleSearch}
      >
        <input
          className='form-control'
          type='text'
          onChange={e => setSearch(e.target.value)}
          value={search}
          placeholder='Search post ...'
        />
        {loading ? (
          <Loading />
        ) : (
          <button
            className='button button-small button-black button-dark button-rounded uil uil-search'
            type='submit'
          ></button>
        )}
      </form>
    </div>
  )
}

export default SearchPost
