import React, { useState } from 'react'
import { useFormik } from 'formik'
import { CommentSchema } from '../../utils/validationSchema'
import { useAddCommentMutation } from '../../redux/slices/commentApiSlice'
import { toast } from 'react-toastify'
import Loading from '../Loading'
import { useSelector } from 'react-redux'

const AddComment = ({ post }) => {
  const { userInfo } = useSelector(state => state.auth)
  const [data, setData] = useState({
    name: userInfo?.firstname || '',
    comment: ''
  })

  const [addComment, { isLoading, error }] = useAddCommentMutation()

  const handleComment = async values => {
    try {
      const res = await addComment({
        postId: post?._id,
        data: { name: values.name, comment: values.comment }
      })
      toast.success('Comment added successfully', { position: 'bottom-center' })
    } catch (err) {
      toast.error(err?.data?.message || err.message, {
        position: 'bottom-center'
      })
    }
    resetForm()
  }

  const {
    values,
    errors,
    touched,
    resetForm,
    handleSubmit,
    handleBlur,
    handleChange
  } = useFormik({
    initialValues: data,
    validationSchema: CommentSchema,
    onSubmit: handleComment
  })
  return (
    <div id='respond'>
      <div className='d-flex justify-content-between items-center'>
        <h3>
          Leave a <span>Comment</span>
        </h3>
        {isLoading && <Loading />}
      </div>
      <form className='row mb-0' onSubmit={handleSubmit} id='commentform'>
        {!userInfo && (
          <div className='form-group col-12'>
            <label htmlFor='author'>Name</label>
            <input
              type='text'
              name='name'
              id=' name'
              onBlur={handleBlur}
              value={values.name}
              onChange={handleChange}
              size='22'
              tabIndex='1'
              placeholder='Enter your name'
              className='form-control'
            />
            <span className='text-danger'>
              {errors.name && touched.name ? errors.name : null}
            </span>
          </div>
        )}
        {userInfo && (
          <h5>
            <span>{userInfo?.firstname}</span> tell us what u think about this
            post...
          </h5>
        )}
        <div className='w-100'></div>
        <div className='form-group col-12'>
          <label htmlFor='comment'>Comment</label>
          <textarea
            name='comment'
            id=' comment'
            onBlur={handleBlur}
            value={values.comment}
            onChange={handleChange}
            cols='58'
            rows='4'
            placeholder='Your comment here...'
            tabIndex='4'
            className='form-control'
          ></textarea>
          <span className='text-danger'>
            {errors.comment && touched.comment ? errors.comment : null}
          </span>
        </div>
        <div className='form-group col-12 mt-4 mb-0'>
          <button
            name='submit'
            type='submit'
            id='submit-button'
            tabIndex='5'
            value='Submit'
            className='button button-large button-black button-dark text-transform-none fw-medium ls-0 button-rounded m-0'
          >
            {isLoading ? 'Adding...' : 'Add Comment'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddComment
