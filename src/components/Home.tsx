import React from 'react'
import "../styles/Home.css";
export const Home = () => {
  return (
    <>
    <div className='homeContainer'>
    <div className="card">
    <svg 
         viewBox="0 0 100% 100%"
         xmlns='http://www.w3.org/2000/svg'
         className="noise"
         >
      <filter id='noiseFilter'>
        <feTurbulence 
                      type='fractalNoise' 
                      baseFrequency='0.85' 
                      numOctaves='6' 
                      stitchTiles='stitch' />
      </filter>
  
      <rect
            width='100%'
            height='100%'
            preserveAspectRatio="xMidYMid meet"
            filter='url(#noiseFilter)' />
    </svg>
    <div className="content">
      <h1>Interactive Gradient</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempore unde ex pariatur distinctio laboriosam, dolorem quibusdam aperiam expedita consequuntur dolorum porro vitae earum quos voluptates et maxime. Tempora, mollitia.</p>
    </div>
  </div>
  <div className="gradient-bg">
    <svg 
         viewBox="0 0 100vw 100vw"
         xmlns='http://www.w3.org/2000/svg'
         className="noiseBg"
         >
      <filter id='noiseFilterBg'>
        <feTurbulence 
                      type='fractalNoise'
                      baseFrequency='0.6'
                      stitchTiles='stitch' />
      </filter>
  
      <rect
            width='100%'
            height='100%'
            preserveAspectRatio="xMidYMid meet"
            filter='url(#noiseFilterBg)' />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="svgBlur">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <div className="gradients-container">
      <div className="g1"></div>
      <div className="g2"></div>
      <div className="g3"></div>
      <div className="g4"></div>
      <div className="g5"></div>
      <div className="interactive"></div>
    </div>
  </div></div></>
  )
}
