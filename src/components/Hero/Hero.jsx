import { wrap } from 'framer-motion'
import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className="paddings innerWidth flexCenter hero-container ">
            {/*Left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <motion.h1
                    initial={{y: "2rem", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{
                        duration: 3,
                        type: "spring"
                    }}
                    >
                        1420 Dupont Street <br />
                    
                    </motion.h1>
                    
                   
                </div>


            </div>
            {/* right side */}
            <div className="flexCenter hero-right">
                <motion.div 
                initial={{x: "7rem", opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                    duration: 2,
                    type: "spring"
                }}
                className="image-containerh">
                    <img src="./livingroom.jpg" alt="" />
                </motion.div>
            </div>
            <div className="flexCenter stats">
                    <div className="flexColStart stat">
                        <span>One Bedroom + Den</span>
                    </div>
                    <div className="flexColStart stat">
                        <span>One Bathroom</span>
                    </div>
                    <div className="flexColStart stat">
                        <span>Parking + Storage</span>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Hero