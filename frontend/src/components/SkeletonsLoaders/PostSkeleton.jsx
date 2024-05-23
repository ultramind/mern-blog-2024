import React from 'react'
import Skeleton from 'react-loading-skeleton'

const PostSkeleton = ({ card }) => {
  return Array(card)
    .fill(0)
    .map((c, i) => (
      <div className='col-md-4' key={i}>
        <article className='entry border-bottom-0 mb-0'>
          <div className='entry-image'>
            <a href=''>
              <Skeleton style={{ height: '100px' }} />
            </a>
          </div>
          <div className='entry-title'>
            <div className='entry-categories'>
              <a href='demo-blog-categories.html'>
                <Skeleton />
              </a>
            </div>

            <h3>
              <span>
                <Skeleton />
              </span>
            </h3>
          </div>
          <div className='entry-meta'>
            <Skeleton count={3} />
          </div>
          <div className='entry-content'>
            <p>
              <Skeleton />
            </p>
          </div>
        </article>
      </div>
    ))
}

export default PostSkeleton
