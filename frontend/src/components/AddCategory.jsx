import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'
import { CategorySchema } from '../utils/validationSchema'
import { useAddCategoryMutation } from '../redux/slices/categoryApiSlice'

const AddCategory = () => {
  const [data, setData] = useState({ category: '' })

  const [addCategory, { isLoading }] = useAddCategoryMutation()

  const handleAddCategory = async values => {
    try {
      const res = await addCategory(values).unwrap()
      console.log(res)
      toast.success('Category added successfully', {
        position: 'bottom-center'
      })
    } catch (err) {
      console.log('Error catch', err)
      toast.error(err?.data?.message || err.message, {
        position: 'bottom-center'
      })
    }
    resetForm()
  }

  const {
    errors,
    resetForm,
    handleBlur,
    handleChange,
    touched,
    values,
    handleSubmit
  } = useFormik({
    initialValues: data,
    validationSchema: CategorySchema,
    onSubmit: handleAddCategory
  })

  return (
    <div className='widget widget-search'>
      <form
        className='input-group mb-0 d-flex align-items-center gap-2'
        onSubmit={handleSubmit}
      >
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
        {isLoading ? (
          <Loading />
        ) : (
          <button
            className='button button-small button-black button-dark button-rounded uil uil-plus'
            type='submit'
          ></button>
        )}
      </form>
      <span className='text-danger mt-0'>
        {errors.category && touched.category ? errors.category : null}
      </span>
    </div>
  )
}

export default AddCategory
