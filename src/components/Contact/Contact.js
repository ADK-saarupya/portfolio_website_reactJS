import React from 'react'

function Contact() {
  return (
    
    <div className='contact--page'>
    <p className='contact'>Get In Touch</p>
    <h2 className='talk--text'>Let's talk about everything!</h2>
    <div className='form'>
        <div className='info'>
    <input type ="text" placeholder='Your name' />
    <input type ="text" placeholder='Email address' />
    </div>
    <div className='sub'>
    <input type ="text" placeholder='subject' className='sub'/>
    </div>
    <div className='msg'>
    <textarea placeholder='Message'className='msg' />
    </div>
    <button className='send--msg'>Send Message</button>
    </div>


    </div>
  )
}

export default Contact