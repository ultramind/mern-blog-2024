import React from 'react'
import PostCardSkeleton from './SkeletonsLoaders/PostCardSkeleton'
import PostCard from './PostCard'

const Aside = ({ posts, isLoading }) => {
  return (
    <div className='col-lg-5'>
      <h3 className='font-body fw-medium mb-4 h4'>Highlights</h3>

      <div className='row posts-md col-mb-30'>
        {isLoading && <PostCardSkeleton card={4} />}
        {posts && posts?.map((post, i) => <PostCard post={post} />)}
      </div>
    </div>
  )
}

export default Aside
