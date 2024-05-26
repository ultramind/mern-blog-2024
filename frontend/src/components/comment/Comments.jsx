import React from 'react'

const Comments = () => {
  return (
    <ol className='commentlist'>
      <li className='comment even thread-even depth-1' id='li-comment-1'>
        <div id='comment-1' className='comment-wrap'>
          <div className='comment-meta'>
            <div className='comment-author vcard'>
              <span className='comment-avatar'>
                <img
                  alt=''
                  src='https://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60'
                  className='avatar avatar-60 photo avatar-default'
                  height='60'
                  width='60'
                />
              </span>
            </div>
          </div>

          <div className='comment-content'>
            <div className='comment-author'>
              John Doe
              <span>
                <a href='#' title='Permalink to this comment'>
                  April 24, 2012 at 10:46 am
                </a>
              </span>
            </div>

            <p>
              Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.
              Nullam id dolor id nibh ultricies vehicula ut id elit. Integer
              posuere erat a ante venenatis dapibus posuere velit aliquet.
            </p>

            <a className='comment-reply-link' href='#'>
              <i className='bi-reply-fill'></i>
            </a>
          </div>

          <div className='clear'></div>
        </div>

        <ul className='children'>
          <li
            className='comment byuser comment-author-_smcl_admin odd alt depth-2'
            id='li-comment-3'
          >
            <div id='comment-3' className='comment-wrap'>
              <div className='comment-meta'>
                <div className='comment-author vcard'>
                  <span className='comment-avatar'>
                    <img
                      alt=''
                      src='https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=40&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&amp;r=G'
                      className='avatar avatar-40 photo'
                      height='40'
                      width='40'
                    />
                  </span>
                </div>
              </div>

              <div className='comment-content'>
                <div className='comment-author'>
                  <a href='#' rel='external nofollow' className='url'>
                    SemiColon
                  </a>
                  <span>
                    <a href='#' title='Permalink to this comment'>
                      April 25, 2012 at 1:03 am
                    </a>
                  </span>
                </div>

                <p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>

                <a className='comment-reply-link' href='#'>
                  <i className='bi-reply-fill'></i>
                </a>
              </div>

              <div className='clear'></div>
            </div>
          </li>
        </ul>
      </li>

      <li
        className='comment byuser comment-author-_smcl_admin even thread-odd thread-alt depth-1'
        id='li-comment-2'
      >
        <div id='comment-2' className='comment-wrap'>
          <div className='comment-meta'>
            <div className='comment-author vcard'>
              <span className='comment-avatar'>
                <img
                  alt=''
                  src='https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G'
                  className='avatar avatar-60 photo'
                  height='60'
                  width='60'
                />
              </span>
            </div>
          </div>

          <div className='comment-content'>
            <div className='comment-author'>
              <a
                href='https://themeforest.net/user/semicolonweb'
                rel='external nofollow'
                className='url'
              >
                SemiColon
              </a>
              <span>
                <a href='#' title='Permalink to this comment'>
                  April 25, 2012 at 1:03 am
                </a>
              </span>
            </div>

            <p>
              Integer posuere erat a ante venenatis dapibus posuere velit
              aliquet.
            </p>

            <a className='comment-reply-link' href='#'>
              <i className='bi-reply-fill'></i>
            </a>
          </div>

          <div className='clear'></div>
        </div>
      </li>
    </ol>
  )
}

export default Comments
