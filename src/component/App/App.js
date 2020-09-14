import React from 'react'
import Title from '../../Title/Title'
import Main from '../../Main/Main'
import Footer from '../../Footer/Footer'
import QuotesBox from '../../Quotes/QuotesBox'

import './app.css'


const App = () => {
    return(
        <div id='container-app'>
            <Title />
            <QuotesBox />
            <Main />
            <Footer/>
        </div>
    )
}
export default App