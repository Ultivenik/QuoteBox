import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import Quote from './Quote'
import quote from '../data/quote'

import './quote-box.css'

import './../../node_modules/slick-carousel/slick/slick-theme.css'
import './../../node_modules/slick-carousel/slick/slick.css'

const QuotesBox = () => {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        if (quote !== undefined) {
            const random = quote.sort(quotes => Math.random(quotes.id) - 0.5)
            setQuotes(random)
        }
    }, [])

    const parameters = {
        slidesToShow: 1,
        speed: 2000,
        infinite: true,
        autoplaySpeed:8000,
        arrows: false,
        autoplay: true,
        fade: true,
        pauseOnHover: false,
    }

    return (
        <div className="quote-container">
            <Slider {...parameters}>
                { quotes.map(quote =>
                    <div key={ quote.id } className="quote-slider">
                        <Quote text={ quote }/>
                    </div>
                ) }
            </Slider>
        </div>
    )
}

export default QuotesBox
