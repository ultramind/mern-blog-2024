import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {
  return (
    <article className='entry col-12'>
      <div className='grid-inner row gutter-20'>
        <div className='col-md-4'>
          <a className='entry-image' href='demo-blog-single.html'>
            <img src={`${post?.imageUrl}`} alt='Image' />
          </a>
        </div>
        <div className='col-md-8'>
          <div className='entry-title title-xs'>
            <div className='entry-categories'>
              <Link to={`/posts/category/${post?.category}`}>
                {post?.category}
              </Link>
            </div>
            <h3>
              <Link to={`/post/${post?.slug}`}>{post?.title}</Link>
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
