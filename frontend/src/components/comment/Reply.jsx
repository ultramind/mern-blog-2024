import React from 'react'

const Reply = ({ reply }) => {
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
              {reply?.name}
            </a>
            <span>
              <a href='#' title='Permalink to this comment'>
                {reply?.createdAt}
              </a>
            </span>
          </div>

          <p>{reply?.reply}</p>

          <a className='comment-reply-link' href='#'>
            <i className='bi-trash-fill'></i>
          </a>
        </div>

        <div className='clear'></div>
      </div>
    </li>
  )
}

export default Reply
