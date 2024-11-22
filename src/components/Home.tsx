import React from 'react'
import "../styles/Home.css";
export const Home = () => {
  return (
    <>
    <div className='homeContainer'>
    <div className="card">

  <div className="content">
    <div className='textContent'>
    <p className='pickles'>&gt; Pickles are Love</p>
    <h1 className='DotDager'>&lt;DOT DAGER&gt;</h1>
    <img src="logo.png" alt="" className="roundedImgHidden" />
    <h2 className='DotDagerText'>Full- Stack Senior developer and Content creator</h2>
    <p className='DotDagerInfo'> I am a Musician; keen on Philosofy and of course a cat lover</p>
    <div className='buttonContainer'>
      <button className="boton-elegante">Explore</button>
    </div>
    </div>
 

    <img src="logo.png" alt="" className="roundedImg" />

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
