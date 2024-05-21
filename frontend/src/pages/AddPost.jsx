import React, { useState } from 'react'
import { useFormik } from 'formik'
import { PostSchema } from '../utils/validationSchema'

const AddPost = () => {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  const handleAddPost = async values => {
    console.log(values)
  }

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    touched,
    errors,
    values
  } = useFormik({
    initialValues: post,
    validationSchema: PostSchema,
    onSubmit: handleAddPost
  })

  //   console.log(errors)
  return (
    <div className='w-50'>
      <h3>
        Add a <span>Post</span>
      </h3>
      <form className='row mb-0' onSubmit={handleSubmit}>
        <div className='form-group col-12'>
          <label htmlFor='author'>Title</label>
          <input
            type='text'
            name='title'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            size='22'
            tabIndex='1'
            className='form-control'
            placeholder='Post Title'
          />
          <span className='text-danger'>
            {errors.title && touched.title ? errors.title : null}
          </span>
        </div>
        <div className='form-group col-12'>
          <label htmlFor='file'>Upload File</label>
          <input
            type='file'
            name='image'
            onChange={e => {
              setFieldValue('image', e.currentTarget.files[0])
            }}
            size='22'
            tabIndex='3'
            className='form-control'
          />
          <span className='text-danger'>
            {errors.image && touched.image ? errors.image : null}
          </span>
        </div>
        <div className='w-100'></div>
        <div className='form-group col-12'>
          <label htmlFor='comment'>Body</label>
          <textarea
            name='body'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.body}
            cols='58'
            rows='7'
            tabIndex='4'
            className='form-control'
            placeholder='Post Body'
          ></textarea>
          <span className='text-danger'>
            {errors.body && touched.body ? errors.body : null}
          </span>
        </div>
        <div className='form-group col-12 mt-4 mb-0'>
          {/* <button
            name='submit'
            type='submit'
            tabIndex='5'
            value='Submit'
            className='button button-large button-black button-dark text-transform-none fw-medium ls-0 button-rounded m-0'
          >
            Submit Post
          </button> */}

          <button
            name='submit'
            type='submit'
            id='submit-button'
            tabIndex='5'
            value='Submit'
            className='button button-large button-black w-100 button-dark text-transform-none fw-medium ls-0 button-rounded m-0'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddPost
