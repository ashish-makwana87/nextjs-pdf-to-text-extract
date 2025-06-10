import React from 'react'

function TextContainer({displayText}:{displayText: string}) {


  return (
    <div className='mt-6 md:mt-10 border-2 rounded-md p-6 md:p-10'>
     <h2 className='head-2'>Extracted Text</h2>
    <p className='text-sm md:text-base mt-4'>{displayText}</p>
    </div>
  )
}

export default TextContainer