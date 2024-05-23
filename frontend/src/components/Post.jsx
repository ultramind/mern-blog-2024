import React from 'react'

const Post = ({ post }) => {
  const postBody = post?.body.substr(0, 70)
  return (
    <div className='col-md-4'>
      <article className='entry'>
        <div className='entry-image mb-3'>
          <a href='demo-blog-single.html'>
            <img src={`${post?.imageUrl}`} alt='Image 3' />
          </a>
        </div>
        <div className='entry-title title-sm'>
          <div className='entry-categories'>
            <a href='demo-blog-categories.html'>{post?.category}</a>
          </div>
          <h3>
            <a
              href='demo-blog-single.html'
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
          <a href='' className='more-link'>
            Read more
          </a>
        </div>
      </article>
    </div>
  )
}

export default Post
