import React from 'react'

const Post = () => {
  return (
    <div className='col-md-4'>
      <article className='entry'>
        <div className='entry-image mb-3'>
          <a href='demo-blog-single.html'>
            <img src='demos/blog/images/categories/1.jpg' alt='Image 3' />
          </a>
        </div>
        <div className='entry-title title-sm'>
          <div className='entry-categories'>
            <a href='demo-blog-categories.html'>Arts & Culture</a>
          </div>
          <h3>
            <a
              href='demo-blog-single.html'
              className='color-underline stretched-link'
            >
              On World Art Day, try out this activity for the whole family
            </a>
          </h3>
        </div>
        <div className='entry-meta'>
          <ul>
            <li>March 21, 2020</li>
          </ul>
        </div>
        <div className='entry-content mt-3'>
          <p>
            Today’s freebie is a set of 60 beautiful multimedia icons designed
            by Carlotta Govi.
          </p>
          <a href='demo-blog-single.html' className='more-link'>
            Read more
          </a>
        </div>
      </article>
    </div>
  )
}

export default Post
