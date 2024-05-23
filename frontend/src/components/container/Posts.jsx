import React from 'react'
import Post from '../Post'
import { useGetAllPostsQuery } from '../../redux/slices/postApiSlice'
import Loading from '../Loading'
import PostSkeleton from '../SkeletonsLoaders/PostSkeleton'
import HeroSkeleton from '../SkeletonsLoaders/HeroSkeleton'

const Posts = () => {
  const { data, isLoading, isError, error } = useGetAllPostsQuery()

  return (
    <div className='col-lg-9'>
      <div className='d-flex'>
        <div className='flex-grow-1'>
          <h3>All Lifestyle Posts</h3>
        </div>
        <div>
          <div className='btn-group'>
            <button
              type='button'
              className='btn btn-sm btn-outline-secondary dropdown-toggle'
              data-bs-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Most Popular
            </button>
            <div className='dropdown-menu'>
              <a className='dropdown-item' href='#'>
                Latest Posts
              </a>
              <a className='dropdown-item' href='#'>
                Most Comments
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='row col-mb-50 posts-md'>
        {isLoading && <PostSkeleton card={9} />}
        {data?.map((post, i) => (
          <Post key={i} />
        ))}
      </div>
    </div>
  )
}

export default Posts
