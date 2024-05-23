import React from 'react'
import Skeleton from 'react-loading-skeleton'

const HeroSkeleton = () => {
  return (
    <div className='col-lg-7 mb-5 mb-lg-0'>
      <article className='entry border-bottom-0 mb-0'>
        <div className='entry-image'>
          <a href=''>
            <Skeleton style={{ height: '300px' }} />
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
  )
}

export default HeroSkeleton
