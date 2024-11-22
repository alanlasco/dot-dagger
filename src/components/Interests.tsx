import React, { useRef } from 'react'
import { motion, useInView } from "motion/react"
import { FaInstagram } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "../styles/Interests.css";
import { Card } from './Card';
export const Interests = () => {
    const ref = useRef(null);
    const isInView = useInView(ref)

  return (
    <>
  <motion.div style={{opacity: isInView ? 1 : 0,
  transform: isInView ? "translateY(0)" : "translateY(100px)",
  transition: "all .3s cubic-bezier(0.17, 0.55,0.55, 1) 0.2s",


  }}
  ref={ref}
  >

    <div className='interestsContainer'> 
        <Card img={"dagergato.jpg"}
            tittle={"Cat Lover"}
            text={"I love cats like normal person do, don't you love them?"}
            textLink={"Follow me on Instagram "}
            link={"https://www.instagram.com/dager.32/"}
            icon={<FaInstagram className='instagram' />}/>
                                <Card img={"creator.jpg"}
            tittle={"Content Creation"}
            text={"I am Content Creator and a Full- Stack senior developer"}
            textLink={"Follow me on my dedicated youtube channel"}
            link={"https://www.youtube.com/@DotDager"}
            icon={<FaYoutube className='youtube' />}/>
                    <Card img={"dagermusico.png"}
            tittle={"Guitar Lover"}
            text={"I am also a Musician, mad about guitars and other instruments"}
            textLink={"Follow me on my Spotify"}
            link={"https://open.spotify.com/intl-es/artist/6bkClBMJd4qKxJp0J5vHsz?si=mbfNHqvBT9SKSQ-ZNhXHJg&nd=1"}
            icon={<FaSpotify className='spotify'/>}/>
                    <Card img={"filosofia.png"}
            tittle={"Philosofy"}
            text={"I am a philosophy enthusiast. I am Dager, and you are not"}
            textLink={"Follow me on my dedicated youtube channel"}
            link={"https://www.youtube.com/c/DagerXIV"}
            icon={<FaYoutube className='youtube'/>}/>

   
    </div>
  </motion.div>

  </>
  )
}
