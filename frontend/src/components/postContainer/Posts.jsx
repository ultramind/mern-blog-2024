import React from 'react'
import Post from './Post'
import { useGetAllPostsQuery } from '../../redux/slices/postApiSlice'
import Loading from '../Loading'
import PostSkeleton from '../SkeletonsLoaders/PostSkeleton'
import HeroSkeleton from '../SkeletonsLoaders/HeroSkeleton'

const Posts = ({ posts, isLoading, page, setPage, query, setQuery }) => {
  // const { data, isLoading, isError, error } = useGetAllPostsQuery()

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
              <span
                className='dropdown-item'
                onClick={() => setQuery({ ...query, sort: 'desc' })}
              >
                Latest Posts
              </span>
              <span
                className='dropdown-item'
                onClick={() => setQuery({ ...query, sort: 'asc' })}
              >
                Old Posts
              </span>
              <span
                className='dropdown-item'
                onClick={() => setQuery({ ...query, limit: 3 })}
              >
                Get by 3
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='row col-mb-50 posts-md'>
        {isLoading && <PostSkeleton card={9} />}
        {posts?.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div>

      <div className='d-flex justify-content-center mt-5'>
        <div className='d-flex align-items-center'>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className='button button-small button-black button-dark fw-medium ls-0 button-rounded m-0 ms-3'
          >
            Prev
          </button>
          <div
            style={{
              width: '80px',
              height: '4px',
              background: '#212529',
              margin: 0
            }}
          ></div>
          <button
            onClick={() => setPage(page + 1)}
            className='button button-small button-black button-dark fw-medium ls-0 button-rounded'
            style={{ margin: 0 }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Posts
