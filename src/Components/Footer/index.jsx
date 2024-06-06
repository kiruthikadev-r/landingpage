import * as React from "react";
import "./index.css";

function ContactItem({ src, alt, label, text }) {
  return (
    <div className="contact-item">
      <img loading="lazy" src={src} alt={alt} className="contact-icon" />
      <div className="contact-text">{text}</div>
    </div>
  );
}

function FooterSection({ title, items }) {
  return (
    <div className="footer-section">
      <div className="footer-title">{title}</div>
      {items.map((item, index) => (
        <div key={index} className="footer-link">{item}</div>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="footer-top">
          <div className="brand">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a4d2a1ea1dc096d24804e10b7d7d58275afc15af7fb227542141317025732b5?apiKey=7e91cb269c0144af96e9f3d2d5576b41&"
              alt="Brand Logo"
              className="brand-logo"
            />
            <div className="brand-tagline">TM</div>
          </div>
          <div className="contacts">
            <ContactItem
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e02ad1dc55e79fc7d485df8603dfb68e311a4aa0b150d3e3dd243a17bf67789c?apiKey=7e91cb269c0144af96e9f3d2d5576b41&"
              alt="Email icon"
              label="email"
              text="help@frybix.com"
            />
            <ContactItem
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f506da62bbbddd662bfed18e00c1374f36e0f691f2cfdb728c9bc2242ccc72f1?apiKey=7e91cb269c0144af96e9f3d2d5576b41&"
              alt="Phone icon"
              label="phone"
              text="+1 234 456 678 89"
            />
          </div>
        </section>
        <section className="footer-middle">
          <FooterSection
            title="links"
            items={["home", "about us", "bookings", "blog"]}
          />
          <FooterSection
            title="legal"
            items={["terms of use", "privacy policy", "cookie policy"]}
          />
          <FooterSection
            title="product"
            items={["take tour", "live chat", "reviews"]}
          />
          <div className="footer-section">
            <div className="footer-title">Newsletter</div>
            <div className="newsletter-subtitle">Stay up to date</div>
            <form className="newsletter-form">
              <label htmlFor="emailInput" className="visually-hidden">
                Your email
              </label>
              <input
                className="newsletter-email"
                type="email"
                id="emailInput"
                placeholder="Your email"
                aria-label="Your email"
              />
              <button className="newsletter-subscribe">Subscribe</button>
            </form>
          </div>
        </section>
        <section className="footer-bottom">
          <p>Copyright 2022 uifry.com all rights reserved</p>
        </section>
      </footer>

      
    </>
  );
}