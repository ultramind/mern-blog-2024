import React from 'react'

const Comment = () => {
  return (
    <>
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
    </>
  )
}

export default Comment
