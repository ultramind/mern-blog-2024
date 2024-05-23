import Skeleton from 'react-loading-skeleton'

const PostCardSkeleton = ({ card }) => {
  return Array(card)
    .fill(0)
    .map((c, i) => (
      <article className='entry col-12'>
        <div className='grid-inner row gutter-10'>
          <div className='col-md-4'>
            <Skeleton style={{ height: '100px' }} />
          </div>
          <div className='col-md-8'>
            <div className='entry-title title-xs'>
              <div className='entry-categories'>
                <a href='demo-blog-categories.html'>
                  <Skeleton />
                </a>
              </div>
              <h3>
                <a
                  href='demo-blog-single.html'
                  className='stretched-link color-underline'
                >
                  <Skeleton count={2} />
                </a>
              </h3>
            </div>
            <div className='entry-meta'>
              <ul>
                <Skeleton count={1} />
                <Skeleton count={1} />
              </ul>
            </div>
          </div>
        </div>
      </article>
    ))
}

export default PostCardSkeleton
