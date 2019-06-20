import React from 'react';

export default function Contact() {
  return (
    <main className="contact-tab">
      <div className="contact-form">
        <h1>Come Say Hi!</h1>
        <form action="https://formspree.io/racheltang15@hotmail.com" method="POST">
          <input type="text" name="name" placeholder="Your Name *" required />
          <input type="text" name="company" placeholder="Your Company" />
          <input type="email" name="email" placeholder="Your Email *" required />
          <textarea name="message" rows="4" id="message" placeholder="Your Message *" required></textarea>
          <input type="submit" value="Send"/>
        </form>
      </div>
    </main>
  )
}

{/*  
    <iframe title="contact form" src="https://docs.google.com/forms/d/e/1FAIpQLSdT-k9RhxJnXGYK3f1tT3AUnREO2oj7GdDV3lO0iZ9LxzD48g/viewform?embedded=true" width="100%" height="930" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    */}