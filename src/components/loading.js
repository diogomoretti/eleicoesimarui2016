import React from 'react'

const Loading = () => {
  return (
    <div className='loading'>
      <svg className='loading-svg' x='0px' y='0px' viewBox='0 0 150 150'>
        <circle className='loading-svg-inner' cx='75' cy='75' r='60' />
      </svg>
    </div>
  )
}

export default Loading
