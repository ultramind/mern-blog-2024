import React from 'react'

const Subscribe = () => {
  return (
    <div className='section section-colored rounded px-4'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-lg-5'>
          <h3 className='mb-4 mb-lg-0'>
            Sign up for Updates &amp; Newsletters.
          </h3>
        </div>
        <div className='col-lg-6'>
          <div className='widget subscribe-widget' data-loader='button'>
            <div className='widget-subscribe-form-result'></div>
            <form
              id='widget-subscribe-form'
              action='include/subscribe.php'
              method='post'
              className='mb-0 d-flex'
            >
              <input
                type='email'
                id='widget-subscribe-form-email'
                name='widget-subscribe-form-email'
                className='form-control form-control-lg not-dark required email'
                placeholder='Your Email Address'
              />
              <button
                className='button button-large button-black button-dark fw-medium ls-0 button-rounded m-0 ms-3'
                type='submit'
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
