import React from 'react'
import "../styles/Contact.css";
export const Contact = () => {
    
  return (
    <><div className='contactContainer' id='contact'>
        <div className='textConnect' id='Connect'>
        <img className="pepino" src="pepino.png" alt="Example" /><span className='aboutMariano'> Connect with me </span><img  className="pepino pepinoRotado" src="pepino.png" alt="Example" />
      <p className='frase'> Do you like pickles as much as me? Do not hesitate! </p>

      <div className="spinner">
  <img className='imgPepino' src="pepinogiratorio.png" alt="Spinner" />
</div>
<p className='frasedos'> Do not watch it for too long! Let's work together </p>
    </div>
    </div>
    <div className='socials'>
        <div className='aContainer'>
<a href="https://discord.com/invite/2NessfQFvY" target='_blank'><img src="discord.png" className='red' alt="" /></a>
<a href="https://github.com/MarianoVilla" target='_blank'><img src="github.png" className='red' alt="" /></a>
<a href="https://www.instagram.com/dager.32/" target='_blank'><img src="instagram.png" className='red' alt="" /></a>
<a href="https://open.spotify.com/intl-es/artist/6bkClBMJd4qKxJp0J5vHsz?si=mbfNHqvBT9SKSQ-ZNhXHJg&nd=1" target='_blank'><img src="spotify.png" className='red' alt="" /></a>
<a href="https://x.com/i/flow/login?redirect_after_login=%2FDager_32" target='_blank'><img src="x.png" className='red' alt="" /></a>
<a href="https://www.youtube.com/@DotDager" target='_blank'> <img src="youtube.png" className='red' alt="" /></a>
</div>
    </div>
    
    
    </>
  )
}
