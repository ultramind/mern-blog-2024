import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'
import { PostSchema } from '../utils/validationSchema'
import Loading from '../components/Loading'
import { toast } from 'react-toastify'
import {
  useEditPostMutation,
  useGetPostQuery
} from '../redux/slices/postApiSlice'
import JoditEditor from 'jodit-react'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
  const { slug } = useParams()
  const { data, isLoading: loading } = useGetPostQuery(slug)
  const navigate = useNavigate()

  const [content, setContent] = useState(data?.body || '')
  const [post, setPost] = useState({
    title: data?.title || '',
    body: null
  })

  const editor = useRef(null)

  const [file, setFile] = useState()

  const [editPost, { isLoading }] = useEditPostMutation()

  const handleEditPost = async values => {
    const postData = { ...values, body: content, id: data._id }
    console.log(postData)
    if (postData.body === null) {
      toast.error('Title and body is required', {
        position: 'bottom-center'
      })
      return
    } else {
      try {
        const res = await editPost(postData).unwrap()
        toast.success('Post updated successfully', {
          position: 'bottom-center'
        })
        console.log(res)
        navigate(`/post/${res?.slug}`)
      } catch (err) {
        console.log(err)
        toast.error(err?.data?.message || err.message, {
          position: 'bottom-center'
        })
      }
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
    onSubmit: handleEditPost
  })

  return (
    <div className='w-50'>
      <div className='d-flex justify-content-between items-center'>
        <h3 className='mb-4'>
          Edit a<span> Post</span>
        </h3>
        {(isLoading || loading) && <Loading />}
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

        <div className='form-group col-12'>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={newContent => setContent(newContent)}
          />
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
            {isLoading ? 'Updating...' : 'Update Post'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditPost
