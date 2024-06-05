import React from 'react'
import { useDeleteReplyMutation } from '../../redux/slices/commentApiSlice'
import { toast } from 'react-toastify'
import Loading from '../Loading'
import { useSelector } from 'react-redux'

const Reply = ({ commentId, reply }) => {
  const { userInfo } = useSelector(state => state.auth)
  const query = { commentId, replyId: reply._id }
  const [deleteReply, { isLoading }] = useDeleteReplyMutation()

  const handleDeleteReply = async () => {
    try {
      await deleteReply(query).unwrap()
      toast.success('Reply deleted', { position: 'bottom-center' })
    } catch (err) {
      toast.error(err?.data?.message || err.message, {
        position: 'bottom-center'
      })
    }
  }
  return (
    <li
      className='comment byuser comment-author-_smcl_admin odd alt depth-2'
      id='li-comment-3'
    >
      <div id='comment-3' className='comment-wrap'>
        <div className='comment-meta'>
          <div className='comment-author vcard'>
            <span className='comment-avatar'>
              <img
                alt=''
                src='https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=40&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&amp;r=G'
                className='avatar avatar-40 photo'
                height='40'
                width='40'
              />
            </span>
          </div>
        </div>

        <div className='comment-content'>
          <div className='comment-author'>
            <a href='#' rel='external nofollow' className='url'>
              {reply?.author?.name}
            </a>
            <span>
              <a href='#' title='Permalink to this comment'>
                {reply?.createdAt}
              </a>
            </span>
          </div>
          <p>{reply?.reply}</p>
          {isLoading && <Loading size={'20px'} />}{' '}
          {userInfo._id === reply?.author.id ? (
            <span
              className='comment-reply-link'
              style={{ cursor: 'pointer' }}
              onClick={handleDeleteReply}
            >
              <i className='bi-trash-fill'></i>
            </span>
          ) : null}
        </div>

        <div className='clear'></div>
      </div>
    </li>
  )
}

export default Reply
