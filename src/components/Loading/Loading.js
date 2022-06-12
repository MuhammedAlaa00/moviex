import React from 'react'
import { Rings } from  'react-loader-spinner';
import './style/style.scss'
function Loading() {
  return (
    <div className='rings'>
        <Rings
            heigth="100"
            width="100"
            color='grey'
            ariaLabel='loading'
        />
    </div>
  )
}

export default Loading