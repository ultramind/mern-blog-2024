import React from 'react'
import Comments from './Comments'
import AddComment from './AddComment'

const CommentSection = ({ post }) => {
  return (
    <>
      <div id='comments'>
        <h3 id='comments-title'>
          <span>3</span> Comments
        </h3>

        {/* List of comments */}
        <Comments />

        <div className='clear'></div>

        {/* Add comment */}
        <AddComment post={post} />
      </div>
    </>
  )
}

export default CommentSection
