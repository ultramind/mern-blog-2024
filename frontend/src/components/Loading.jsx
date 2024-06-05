import ReactLoading from 'react-loading'
function Loading ({ size }) {
  return (
    <ReactLoading
      type='spin'
      color='#ffffff'
      style={{ width: `${size || '30px'}` }}
    />
  )
}

export default Loading
