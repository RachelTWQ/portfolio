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