import * as React from "react";
import websiteLogo from '/assets/Frame.png';
import "./index.css";

const menuItems = ["home", "about us", "pricing", "features"];

const Menu = ({ items }) => (
  <nav className="menu">
    {items.map((item, index) => (
      <span key={index} className={`menu-item ${item === "home" ? "highlighted" : ""}`}>
        {item}
      </span>
    ))}
  </nav>
);

function Navbar() {
  return (
    <>
      <header className="header">
        {/* <div className="logo-container d-flex">
          <div className="d-flex">

          <img loading="lazy" src={websiteLogo} alt="Brand logo" className="logo" />
          <h3 className="brand-name">Urify</h3>
          </div>
          

          
        
        </div> */}


          <div className="logo-container">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/14479c4c45de02b03703187c82bb3fca68215d492c9d007134f6f70f78498ead?apiKey=7e91cb269c0144af96e9f3d2d5576b41&"
            className="logo-image"
            alt="Company Logo"
          />
          <div className="trademark"></div>
        </div>



        <div className="navigation">
          <Menu items={menuItems} />
          <button className="download-button">download</button>
        </div>
      </header>
    </>
  );
}

export default Navbar;