import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  const postBody = post?.body.substr(0, 70)
  return (
    <div className='col-md-4'>
      <article className='entry'>
        <div className='entry-title title-sm'>
          <div className='entry-categories'>
            <Link to={`/posts/category/${post?.category}`}>
              {post?.category}
            </Link>
          </div>
          <h3>
            <a
              to={`/post/${post?.slug}`}
              className='color-underline stretched-link'
            >
              {post?.title}
            </a>
          </h3>
        </div>
        <div className='entry-meta'>
          <ul>
            <li>{post?.createdAt}</li>
          </ul>
        </div>
        <div className='entry-content mt-3'>
          <p className='m-0'>{postBody}...</p>
          <Link to={`/post/${post?.slug}`} className='more-link mt-2'>
            Read more
          </Link>
        </div>
      </article>
    </div>
  )
}

export default Post
