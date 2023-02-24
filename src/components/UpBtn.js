import React from 'react'
import "./UpBtn.css"

export default function scrollBtn() {
  const goUp = () => {
    console.log("Go up")
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  const size = "2rem"
  const arrowIconSvg = <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" stroke="none">
      <path d="M386 944 c-225 -54 -376 -286 -338 -517 62 -367 512 -513 773 -252 329 330 18 879 -435 769z m219 -39 c312 -81 418 -473 191 -701 -241 -240 -651 -107 -709 230 -50 295 226 546 518 471z" />
      <path d="M405 670 c-70 -71 -87 -92 -77 -102 10 -10 27 2 82 57 l70 69 2 -224 c3 -192 5 -225 18 -225 13 0 15 33 18 225 l2 224 70 -69 c55 -55 72 -67 82 -57 10 10 -7 31 -77 102 -49 50 -92 90 -95 90 -3 0 -46 -40 -95 -90z" />
    </g>
  </svg>

  return (
    <div className='up-button'>
      <button type='button' onClick={goUp}>
        {arrowIconSvg}
      </button >
    </div>
  )
}