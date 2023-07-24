import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className="paddings innerWidth flexCenter f-container">

            {/* left side */}
            <div className="flexColStart">
                <img src="./logo1.png" alt="" width={140} />

                <span color='white'>
                    Your new every day

                </span>
            </div>

            <div className="flexColStart f-right">
                <span className='orangeText'>1420 Dupont St., Toronto, M6H 0C2</span>
            
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Footer