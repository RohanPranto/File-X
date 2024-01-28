import React from 'react'

function ProgressBar({progress=100}) {
  return (
    <div className='bg-gray-400 h-4 w-full mt-3 rounded-full'>
      <div className='py-0.2 bg-primary h-4 text-[10px] font-bold text-white rounded-full' style={{width:`${progress}%`}}>

      {`${Number(progress).toFixed(0)}%`}
      </div>
    </div>
  )
}

export default ProgressBar
