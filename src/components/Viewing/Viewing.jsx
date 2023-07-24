import React from 'react'
import './Viewing.css'


const Viewing = () => {
  return (
    <section className="g-wrapper" id='viewing'>
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Book a Viewing Today!</span>
                <span className='secondaryText'>
                    Viewings can be placed with a minimum of 4 hours notice.
                
                    Viewings are between 9am-7pm, 7 days a week.
                </span>
                <button className="button">
                    <a href="mailto:tgarywinn@gmail.com">Book Now</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Viewing