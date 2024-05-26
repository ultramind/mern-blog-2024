import React from 'react'
import Comments from './Comments'
import AddComment from './AddComment'

const CommentSection = () => {
  return (
    <>
      <div id='comments'>
        <h3 id='comments-title'>
          <span>3</span> Comments
        </h3>

        {/* List of comments */}
        <Comments />

        <div class='clear'></div>

        {/* Add comment */}
        <AddComment />
      </div>
    </>
  )
}

export default CommentSection
