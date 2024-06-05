import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/utils'

const PostCard = ({ post }) => {
  return (
    <li className='entry col-12'>
      <div className='grid-inner'>
        <div className='entry-title'>
          <div className='entry-categories'>
            <Link to={`/posts/category/backen`}>{post?.category}</Link>
          </div>
          <h4>
            <Link
              to={`/post/${post.slug}`}
              className='color-underline stretched-link'
            >
              {post?.title}
            </Link>
          </h4>
        </div>
        <div className='entry-meta'>
          <ul>
            <li>
              <a href='#'>{formatDate(post?.createdAt)}</a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  )
}

export default PostCard
