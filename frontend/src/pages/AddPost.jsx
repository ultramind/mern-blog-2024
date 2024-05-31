import React, { useState } from 'react'
import { useFormik } from 'formik'
import { PostSchema } from '../utils/validationSchema'
import Loading from '../components/Loading'
import { toast } from 'react-toastify'
import { useAddPostMutation } from '../redux/slices/postApiSlice'
import { Editor } from 'primereact/editor'
import {} from 'q'


const AddPost = () => {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  const [file, setFile] = useState()

  const [addPost, { isLoading }] = useAddPostMutation()

  const handleAddPost = async values => {
    try {
      const res = await addPost(values).unwrap()
      toast.success('Post added successfully', {
        position: 'bottom-center'
      })
      resetForm()
    } catch (err) {
      toast.error(err?.data?.message || err.message, {
        position: 'bottom-center'
      })
    }
  }

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    touched,
    errors,
    values,
    resetForm
  } = useFormik({
    initialValues: post,
    validationSchema: PostSchema,
    onSubmit: handleAddPost
  })

  //   console.log(errors)
  return (
    <div className='w-50'>
      <div className='d-flex justify-content-between items-center'>
        <h3 className='mb-4'>
          Add a<span> Post</span>
        </h3>
        {isLoading && <Loading />}
      </div>
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
        <div>
          <Editor/>
        </div>
        <div className='form-group col-12 mt-4 mb-0'>
          <button
            name='submit'
            type='submit'
            id='submit-button'
            tabIndex='5'
            value='Submit'
            className='button button-large button-black w-100 button-dark text-transform-none fw-medium ls-0 button-rounded m-0'
          >
            {isLoading ? 'Submitting...' : 'Submit Post'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddPost
