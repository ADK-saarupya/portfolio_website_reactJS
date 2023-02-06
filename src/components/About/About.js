import React from 'react'
import manAvatar from "./Images/man--avatar.png"

function About() {
    return (
        <div className='about--page'>
            <p className='about'>About Me</p>
            <img src={manAvatar} alt="man img" height="108px" width="108px" />
            <div className='my--info--container'>
                <div className='my--info'>
                    I am Saarupya Adhikari, web developer from Kathmandu, Nepal. I create websites that help people succeed. I use ReactJS to create a website. Beside web development I am interested in machine learning and database administration.<br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, nunc in porttitor pellentesque, massa sem feugiat nulla, ut mollis sem justo vitae magna. Aenean sit amet massa in felis rhoncus sodales. Curabitur nisl libero, dictum vel porta vitae, rutrum quis magna. Proin venenatis, mauris sit amet rhoncus posuere,<br /> felis ligula interdum purus, et porttitor mauris massa ut purus. Ut est nunc, sollicitudin quis sagittis vitae, blandit sed tellus. Praesent varius, sapien ac vestibulum consectetur, mi libero sodales diam, sit amet
                </div>
                <div className='my-skills'>
                    <div className='skill-item '>
                        <h4>HTML & CSS</h4>

                        <div className='progress prog1'>
                            <div className='prog1--data'>.</div>
                        </div>
                    </div>
                    <div className='skill-item '>
                        <h4>JavaScript</h4>
                        <div className='progress prog2'>
                            <div className='prog2--data'>.</div>
                        </div>
                    </div>
                    <div className='skill-item '>
                        <h4>ReactJS</h4>
                        <div className='progress prog3'>
                            <div className='prog3--data'>.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
