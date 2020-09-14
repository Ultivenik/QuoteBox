import React from 'react'
import Slider from 'react-slick'
import img from '../data/img'
import './main.css'

import './../../node_modules/slick-carousel/slick/slick-theme.css'
import './../../node_modules/slick-carousel/slick/slick.css'

const Main = () => {
    const parameters = {
        accessibility:false,
        dots: false,
        slidesToShow: 1,
        speed: 5000,
        autoplaySpeed:10000,
        infinite: true,
        arrows: false,
        autoplay: true,
        fade: true,
        pauseOnHover: false,
    }

    return (
        <>
            <Slider {...parameters}>
                {img.map(background =>
                    <div key={background.id} className="container-bg">
                        <div
                            className='bg-fade'
                            style={{'backgroundImage': `linear-gradient( rgba(255, 255, 255, 0.7), rgba(255,255,255,0.5) ), url(${background.src})`}}
                        >
                        </div>
                    </div>
                )}
            </Slider>
        </>
    )
}

export default Main
