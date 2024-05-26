import React from 'react'

const Comment = ({ comment }) => {
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

          <div className='comment-content'>
            <div className='comment-author'>
              {comment?.name}
              <span>
                <a href='#' title='Permalink to this comment'>
                  {comment?.createdAt}
                </a>
              </span>
            </div>

            <p>{comment?.comment}</p>

            <a className='comment-reply-link' href='#'>
              <i className='bi-reply-fill'></i>
            </a>
          </div>

          <div className='clear'></div>
        </div>

        {/* REPLY */}
        <ul className='children'></ul>
      </li>
    </>
  )
}

export default Comment
