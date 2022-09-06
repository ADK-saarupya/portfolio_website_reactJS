import React from 'react'
import camera from "./Images/cam1.png"
import uiux from "./Images/uiux.png"
import webdev from "./Images/webdev.jpeg"


function Services() {
    return (
        <div className='services--page'>
            <p className='services'>Services</p>
            <div className='services--item'>
                <div className="ui--design serv" >
                    <img src={uiux} />
                    <h2>UI/UX Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.</p>
                </div>
                <div className='web--dev serv'>
                    <img src={webdev} />
                    <h2>Web Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.</p>

                </div>
                <div className='photography serv' >
                    <img src={camera}  />
                    <h2>Photography</h2>
                    <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.</p>
                </div>
            </div>
        </div>
    )
}

export default Services;