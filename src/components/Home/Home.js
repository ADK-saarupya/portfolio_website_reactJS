import React from 'react'
import manImg from "./Images/manAvatar.png"
import fb from "./Images/facebook.png"
import insta from "./Images/insta.png"
import linkedin from "./Images/linkedin.png"
import twitter from "./Images/twitter.png"
import github from "./Images/git.png"



function Home() {
    return (
        <div className='main--home'>
           
            <img  src={manImg} alt="man Image" width="108px" height="108px" />
            <h1 className="my--name">Saarupya Adhikari</h1>
            <p>
                I'm a React Developer.

            </p>
            <div className='social--media'>
                <span><a href="https://www.facebook.com/saarupya.adhikari/"><img src={fb}/></a></span>
                <span><a href="https://www.instagram.com/adk_saarupya/"><img src={insta}/></a></span>
                <span><a href="https://www.linkedin.com/feed/"><img src={linkedin}/></a></span>
                <span><a href="https://twitter.com/home"><img src={twitter}/></a></span>
                <span><a href="https://github.com/ADK-saarupya"><img src={github}/></a></span>
               
            </div>
            <button>  View my CV</button>
            <button>Hire me</button>
           


        </div>
    )
}

export default Home