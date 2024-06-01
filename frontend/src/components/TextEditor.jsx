import React, { useState, useRef, useMemo } from 'react'
import JoditEditor from 'jodit-react'

const TextEditor = ({ placeholder }) => {
  const editor = useRef(null)
  const [content, setContent] = useState('')

  const config = useMemo(
    {
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || 'Start typings...'
    },
    [placeholder]
  )

  return (
    <JoditEditor ref={editor} value={content} config={config} tabIndex={1} />
  )
}

export default TextEditor
