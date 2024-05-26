import React from 'react'
import Comments from './Comments'
import AddComment from './AddComment'

const CommentSection = ({ post }) => {
  return (
    <>
      <div id='comments'>
        
        {/* List of comments */}
        <Comments post={post} />

        <div className='clear'></div>

        {/* Add comment */}
        <AddComment post={post} />
      </div>
    </>
  )
}

export default CommentSection
