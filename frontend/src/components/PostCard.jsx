import React from 'react'

const PostCard = ({ post }) => {
  return (
    <article className='entry col-12' key={i}>
      <div className='grid-inner row gutter-20'>
        <div className='col-md-4'>
          <a className='entry-image' href='demo-blog-single.html'>
            <img src={`${post?.imageUrl}`} alt='Image' />
          </a>
        </div>
        <div className='col-md-8'>
          <div className='entry-title title-xs'>
            <div className='entry-categories'>
              <a href='demo-blog-categories.html'>{post?.category}</a>
            </div>
            <h3>
              <a
                href='demo-blog-single.html'
                className='stretched-link color-underline'
              >
                {post?.title}
              </a>
            </h3>
          </div>
          <div className='entry-meta'>
            <ul>
              <li>
                <a href='#'>{post?.createdAt}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PostCard
