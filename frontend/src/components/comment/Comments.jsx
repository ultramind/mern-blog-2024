import React from 'react'
import { useGetAllCommentQuery } from '../../redux/slices/commentApiSlice'
import Loading from '../Loading'
import Comment from './Comment'

const Comments = ({ post }) => {
  const { data: comments, isLoading } = useGetAllCommentQuery(post?._id)

  return (
    <>
      <div className='d-flex justify-content-between items-center'>
        <h3 id='comments-title'>
          <span className='text-default'>{comments?.length}</span> Comments
        </h3>
        {isLoading && <Loading />}
      </div>
      <ol className='commentlist'>
        {comments?.map((data, i) => (
          <Comment key={i} comment={data} />
        ))}
      </ol>
    </>
  )
}

export default Comments
