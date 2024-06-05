import React from 'react'
import { Link } from 'react-router-dom'
import PostBody from './PostBody'
import { formatDate } from '../../utils/utils'

const Post = ({ post }) => {
  const body = post?.body.substr(0, 70)
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
            <Link
              to={`/post/${post?.slug}`}
              className='color-underline stretched-link'
            >
              {post?.title}
            </Link>
          </h3>
        </div>
        <div className='entry-meta'>
          <ul>
            <li>{formatDate(post?.createdAt)}</li>
          </ul>
        </div>
        <div className='entry-content mt-3'>
          {/* <p className='m-0'>{body}...</p> */}
          {/* <PostBody postBody={post?.body} /> */}
          {/* <Link to={`/post/${post?.slug}`} className='more-link mt-2'>
            Read more
          </Link> */}
        </div>
      </article>
    </div>
  )
}

export default Post
