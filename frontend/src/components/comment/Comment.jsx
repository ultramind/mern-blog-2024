import React, { useState } from 'react'
import AddReply from './AddReply'
import Reply from './Reply'
import { useSelector } from 'react-redux'

const Comment = ({ comment }) => {
  const { userInfo } = useSelector(state => state.auth)
  const [replyModal, setReplyModal] = useState(false)

  const toggleReplyModal = () => {
    setReplyModal(prev => !prev)
  }
  return (
    <>
      <li className='comment even thread-even depth-1' id='li-comment-1'>
        <div id='comment-1' className='comment-wrap'>
          <div className='comment-meta'>
            <div className='comment-author vcard'>
              <span className='comment-avatar'>
                <img
                  alt=''
                  src='https://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60'
                  className='avatar avatar-60 photo avatar-default'
                  height='60'
                  width='60'
                />
              </span>
            </div>
          </div>

          <div className='comment-content mb-2'>
            <div className='comment-author'>
              {comment?.name}
              <span>
                <a href='#' title='Permalink to this comment'>
                  {comment?.createdAt}
                </a>
              </span>
            </div>

            <p>{comment?.comment}</p>

            {userInfo && (
              <span
                className='comment-reply-link cursor-pointer'
                onClick={toggleReplyModal}
              >
                <i className='bi-reply-fill'></i>
              </span>
            )}
          </div>

          {replyModal ? (
            <AddReply
              commentId={comment?._id}
              toggleReplyModal={toggleReplyModal}
              replyModal={replyModal}
            />
          ) : null}
        </div>
        {/* REPLY */}
        <ul className='children'>
          {comment?.replies.map((reply, i) => (
            <Reply key={i} commentId={comment?._id} reply={reply} />
          ))}
        </ul>
      </li>
    </>
  )
}

export default Comment
