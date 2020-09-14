import React from 'react'
import './quote.css'

const Quote = ({text}) => {
    return (
        <div className="text-box">
            <div className="text">
                <blockquote> { text.text } </blockquote>
            </div>
            <div className="author">
                [{ text.author }]
            </div>
        </div>

    )
}

export default Quote

