import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
    let url = {
        linkedin:"https://www.linkedin.com/in/kevinbalibrea/",
        github:"https://github.com/Ultivenik"
    }
    return (
        <div className="footer">
            <div className="links">
                <a href={ url.linkedin } className="fa-icon linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href={ url.github } className="fa-icon git" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
        </div>
    )
}

export default Footer
