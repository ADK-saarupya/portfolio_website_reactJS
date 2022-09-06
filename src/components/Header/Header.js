import React from 'react'
import homeIcon from "./Images/houseIcon.png"
import aboutIcon from "./Images/about.png"
import qualIcon from "./Images/qual.png"
import servicesIcon from "./Images/services.png"
import contactIcon from "./Images/contact.png"
import {Link} from "react-router-dom"

function Header() {
    return (
        <div className='desktop--header'>


            <div className='logo'>

                <span>-</span>ADK<span>-</span>
            </div>
            <nav>
                <ul class="vertical-menu">
                   <Link to="/"><li> <img src={homeIcon} />Home</li></Link>
                   <Link to="/about">  <li><img src={aboutIcon} />About</li></Link>
                   <Link to="/qualification">  <li><img src={qualIcon} />Qualifications</li></Link>
                   <Link to="/services">  <li><img src={servicesIcon} />Services</li></Link>
                   <Link to="/contact"> <li><img src={contactIcon} />Contact</li></Link>
                </ul>

            </nav>
            
            <div className='bottom'>
                <span className='copyright'>&copy; 2022 ADK Template</span>
            </div>
        </div>
    )
}

export default Header