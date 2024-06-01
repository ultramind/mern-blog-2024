import React from 'react'

const PostBody = ({ postBody }) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: postBody
        }}
      />
    </>
  )
}

export default PostBody
