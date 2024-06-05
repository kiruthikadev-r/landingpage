import * as React from 'react';
import "./index.css"

function MyComponent() {
  const contactInfo = [
    {
      imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e02ad1dc55e79fc7d485df8603dfb68e311a4aa0b150d3e3dd243a17bf67789c?apiKey=7e91cb269c0144af96e9f3d2d5576b41&',
      altText: 'Email Icon',
      text: 'help@frybix.com',
    },
    {
      imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f506da62bbbddd662bfed18e00c1374f36e0f691f2cfdb728c9bc2242ccc72f1?apiKey=7e91cb269c0144af96e9f3d2d5576b41&',
      altText: 'Phone Icon',
      text: '+1 234 456 678 89',
    },
  ];

  const footerLinks = [
    {
      sectionTitle: 'links',
      links: ['home', 'about us', 'bookings', 'blog'],
    },
    {
      sectionTitle: 'legal',
      links: ['terms of use', 'privacy policy', 'cookie policy'],
    },
    {
      sectionTitle: 'product',
      links: ['take tour', 'live chat', 'reviews'],
    },
  ];

  return (
    <>
      <div className="main-container">
        <section className="inner-container">
          <div className="logo-container">
            <div className="logo-text">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a4d2a1ea1dc096d24804e10b7d7d58275afc15af7fb227542141317025732b5?apiKey=7e91cb269c0144af96e9f3d2d5576b41&" alt="Site Logo" className="logo" />
              <div className="logo-subtext">TM</div>
            </div>
            {contactInfo.map(info => (
              <div className="contact-info" key={info.text}>
                <img loading="lazy" src={info.imgSrc} alt={info.altText} className="contact-icon" />
                <div className="contact-text">{info.text}</div>
              </div>
            ))}
          </div>
          {footerLinks.map(section => (
            <nav className="footer-section" key={section.sectionTitle}>
              <div className="footer-title">{section.sectionTitle}</div>
              {section.links.map((link, index) => (
                <div className="footer-link" key={index}>{link}</div>
              ))}
            </nav>
          ))}
          <section className="newsletter-container">
            <div className="newsletter-title">Newsletter</div>
            <div className="newsletter-description">Stay up to date</div>
            <form className="newsletter-form">
              <label htmlFor="emailInput" className="visually-hidden">Your email</label>
              <input
                className="newsletter-input"
                type="email"
                id="emailInput"
                placeholder="Your email"
                aria-label="Your email"
              />
              <button className="subscribe-button">Subscribe</button>
            </form>
          </section>
        </section>
        <footer className="footer-note">
          Copyright 2022 uifry.com all rights reserved
        </footer>
      </div>
    </>
  );
}

export default MyComponent;