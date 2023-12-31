import React from "react";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Neighbourhood.css'
import data from '../../utils/slider.json'
import { sliderSettings } from "../../utils/common";

const Neighbourhood = () => {
    return (
        <section className="r-wrapper" id="neigh">
             <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="orangeText">The Neighbourhood</span>
                    <span className="primaryText">Junction - Wallace Emerson</span>
                    <span className="secondaryText">Popular Spots</span>
                </div>

                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {
                        data.map((card, i)=>(
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="home" />
                                    <span className="primaryText">{card.name}</span>
                                    <span className="secondaryText r-price">
                                        <span>{card.address}</span>
                                    </span>

                                    
                                    <span className="secondaryText">{card.detail}</span>
                                </div>
                            </SwiperSlide>
            
                        ))
                    }
                </Swiper>
             </div>
        </section>
    )
}

export default Neighbourhood;

const SliderButtons = () => {
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    );
};