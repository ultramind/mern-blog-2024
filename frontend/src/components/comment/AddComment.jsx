import React from 'react'

const AddComment = () => {
  return (
    <div id='respond'>
      <h3>
        Leave a <span>Comment</span>
      </h3>

      <form class='row mb-0' action='#' method='post' id='commentform'>
        <div class='form-group col-12'>
          <label for='author'>Name</label>
          <input
            type='text'
            name='author'
            id='author'
            value=''
            size='22'
            tabindex='1'
            class='form-control'
          />
        </div>

        <div class='w-100'></div>

        <div class='form-group col-12'>
          <label for='comment'>Comment</label>
          <textarea
            name='comment'
            id='comment'
            cols='58'
            rows='7'
            tabindex='4'
            class='form-control'
          ></textarea>
        </div>

        <div class='form-group col-12 mt-4 mb-0'>
          <button
            name='submit'
            type='submit'
            id='submit-button'
            tabindex='5'
            value='Submit'
            class='button button-large button-black button-dark text-transform-none fw-medium ls-0 button-rounded m-0'
          >
            Submit Comment
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddComment
