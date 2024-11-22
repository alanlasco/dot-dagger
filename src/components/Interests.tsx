import React, { useRef } from 'react'
import { motion, useInView } from "motion/react"
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
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  </motion.div>

  </>
  )
}
