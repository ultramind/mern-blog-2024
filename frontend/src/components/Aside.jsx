import React from 'react'

const Aside = () => {
  return (
    <div className='col-lg-5'>
      <h3 className='font-body fw-medium mb-4 h4'>Highlights</h3>

      <div className='row posts-md col-mb-30'>
        <article className='entry col-12'>
          <div className='grid-inner row gutter-20'>
            <div className='col-md-4'>
              <a className='entry-image' href='demo-blog-single.html'>
                <img src='demos/blog/images/hero/2.jpg' alt='Image' />
              </a>
            </div>
            <div className='col-md-8'>
              <div className='entry-title title-xs'>
                <div className='entry-categories'>
                  <a href='demo-blog-categories.html'>Market</a>
                </div>
                <h3>
                  <a
                    href='demo-blog-single.html'
                    className='stretched-link color-underline'
                  >
                    What Everyone’s Getting Wrong About the Toilet Paper
                    Shortage
                  </a>
                </h3>
              </div>
              <div className='entry-meta'>
                <ul>
                  <li>
                    <a href='#'>Mar 11, 2016</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <article className='entry col-12'>
          <div className='grid-inner row gutter-20'>
            <div className='col-md-4'>
              <a className='entry-image' href='demo-blog-single.html'>
                <img src='demos/blog/images/hero/3.jpg' alt='Image' />
              </a>
            </div>
            <div className='col-md-8'>
              <div className='entry-title title-xs'>
                <div className='entry-categories'>
                  <a href='demo-blog-categories.html'>Tech</a>
                </div>
                <h3>
                  <a
                    href='demo-blog-single.html'
                    className='stretched-link color-underline'
                  >
                    Designing an e-commerce site for a Cloth store — a UI/UX
                    case
                  </a>
                </h3>
              </div>
              <div className='entry-meta'>
                <ul>
                  <li>
                    <a href='#'>Mar 11, 2016</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <article className='entry col-12'>
          <div className='grid-inner row gutter-20'>
            <div className='col-md-4'>
              <a className='entry-image' href='demo-blog-single.html'>
                <img src='demos/blog/images/hero/4.jpg' alt='Image' />
              </a>
            </div>
            <div className='col-md-8'>
              <div className='entry-title title-xs'>
                <div className='entry-categories'>
                  <a href='demo-blog-categories.html'>Food</a>
                </div>
                <h3>
                  <a
                    href='demo-blog-single.html'
                    className='stretched-link color-underline'
                  >
                    The Path: “I stayed loyal to those who gave me
                    opportunities, and tried to remain humble every step of the
                    way.”
                  </a>
                </h3>
              </div>
              <div className='entry-meta'>
                <ul>
                  <li>
                    <a href='#'>Mar 11, 2016</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <article className='entry col-12'>
          <div className='grid-inner row gutter-20'>
            <div className='col-md-4'>
              <a className='entry-image' href='demo-blog-single.html'>
                <img src='demos/blog/images/hero/5.jpg' alt='Image' />
              </a>
            </div>
            <div className='col-md-8'>
              <div className='entry-title title-xs'>
                <div className='entry-categories'>
                  <a href='demo-blog-categories.html'>Tech</a>
                </div>
                <h3>
                  <a
                    href='demo-blog-single.html'
                    className='stretched-link color-underline'
                  >
                    Adobe XD: putting auto-animate to the test
                  </a>
                </h3>
              </div>
              <div className='entry-meta'>
                <ul>
                  <li>
                    <a href='#'>Mar 11, 2016</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Aside
