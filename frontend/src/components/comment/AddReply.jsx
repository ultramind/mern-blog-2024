import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { ReplySchema } from '../../utils/validationSchema'
import { useAddReplyMutation } from '../../redux/slices/commentApiSlice'
import { toast } from 'react-toastify'
import Loading from '../Loading'

const AddReply = ({ commentId, toggleReplyModal, replyModal }) => {
  const { userInfo } = useSelector(state => state.auth)
  const [replyData, setReplyData] = useState({
    name: userInfo?.firstname || '',
    reply: ''
  })

  const [addReply, { isLoading, error }] = useAddReplyMutation()

  const handleAddReply = async values => {
    try {
      const res = await addReply({
        commentId,
        data: { name: values.name, comment: values.reply }
      })
      toast.success('Replied successfully', { position: 'bottom-center' })
    } catch (err) {
      toast.error(err?.data?.message || err.message, {
        position: 'bottom-center'
      })
    }
    resetForm()
    toggleReplyModal()
  }

  const {
    errors,
    values,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm
  } = useFormik({
    initialValues: replyData,
    validationSchema: ReplySchema,
    onSubmit: handleAddReply
  })

  return (
    <div className=''>
      <form className='row mb-0' onSubmit={handleSubmit} id='commentform'>
        <label htmlFor='author'>
          <span>{userInfo?.firstname}</span> reply here...
        </label>
        <div className='form-group col-12 d-flex gap-3'>
          <div className='col-10'>
            <input
              type='text'
              name='reply'
              id=' reply'
              onBlur={handleBlur}
              value={values.reply}
              onChange={handleChange}
              size='22'
              tabIndex='1'
              placeholder='reply here...'
              className='form-control'
              style={{ border: `${errors.reply ? '1px solid red' : ''}` }}
            />
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <button
              name='submit'
              type='submit'
              id='submit-button'
              tabIndex='5'
              value='Submit'
              className='button button-small button-black button-dark text-transform-none fw-medium ls-0 button-rounded m-0'
            >
              reply
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default AddReply
