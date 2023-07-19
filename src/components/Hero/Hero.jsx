import { wrap } from 'framer-motion'
import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className="paddings innerWidth flexCenter hero-container ">
            {/*Left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>
                        Discover <br />Junction - <br />Wallace Emerson <br />
                    </h1>
                </div>

                <div className="flexColStart hero-des">
                    <span>Experience the best of Toronto's West End</span>
                </div>

                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" />
                    <button className="button">Search</button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColStart stat">
                        <span>One Bedroom + Den</span>
                    </div>
                    <div className="flexColStart stat">
                        <span>One Bathroom</span>
                    </div>
                    <div className="flexColStart stat">
                        <span>Balcony</span>
                    </div>
                </div>

            </div>
            {/* right side */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./livingroom.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero