import React from 'react'
import "./scrollBtn.css"

export default function scrollBtn() {
    const goUp = () => {
        console.log("Go up")
    }

  return (
    <div className='scroll-button'>
        <button type='button' onClick={goUp}>
            Up!
        </button >
    </div>
  )
}
