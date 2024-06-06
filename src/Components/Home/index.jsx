import * as React from "react";
import Navbar  from "../Navbar";
import Footer from '../Footer';
import iphone1 from '/assets/iPhone-13-Pro-Max.png';
import iphone2 from '/assets/iPhone-13-Pro-Max0.png';
import iphone3 from '/assets/iPhone-13-Pro-Max2.png';
import screen1 from '/assets/Screen1.png';
import screen2 from '/assets/Screen3.png';
import screen3 from '/assets/Mockup3.png';
import feature1 from '/assets/star-05.png';
import feature2 from '/assets/cube-02.png';
import feature3 from '/assets/cube-04.png';




import "./index.css";

import { FaApple } from "react-icons/fa";

function TestimonialItem({ imageSrc, title, content, author }) {
  return (
    <article className="testimonial-item">
      <div className="testimonial-image-wrapper">
        <img loading="lazy" src={imageSrc} alt={`Image of ${author}`} className="testimonial-image" />
      </div>
      <div className="testimonial-content-wrapper">
        <h3 className="testimonial-title">{title}</h3>
        <p className="testimonial-content">{content}</p>
        <p className="testimonial-author">{author}</p>
      </div>
    </article>
  );
}


const TestimonialCard = ({ title, description, color, align}) => (
  <div className={`testimonial-card ${color}`}>
    <h2 className="title">{title}</h2>
    <p className={`description ${align}`}>{description}</p>
  </div>
);



const AdvantageItem = ({ imgSrc, title, description }) => (
  <div className="advantage-item">
    <img loading="lazy" src={imgSrc} alt={title} className="icon" />
    <div className="title">{title}</div>
    <p className="description">{description}</p>
  </div>
);

const features = [
  {
    imgSrc: feature1,
    altText: "Budgeting intervals",
    label: "Budgeting intervals",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
  {
    imgSrc: feature2,
    altText: "Budgeting intervals",
    label: "Budgeting intervals",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
  {
    imgSrc: feature3,
    altText: "Budgeting intervals",
    label: "Budgeting intervals",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
];



const advantages = [
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b77fcba72221c052587c2d858c174a36b319e95184592c88db6b475cfa54854d?apiKey=7e91cb269c0144af96e9f3d2d5576b41&",
    title: "clever notifications",
    description:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
  },
];





function Home() {
  const testimonials = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f624580a765503cc309003513cf77b88aba67cc4ee373c8f2b936bde27c92f2?apiKey=7e91cb269c0144af96e9f3d2d5576b41&",
      title: "The best financial accounting app ever!",
      content: ` “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.” `,
      author: "Nick Jonas",
    },
  ];

  
function FeatureItem({ imgSrc, altText, label, description }) {
  return (
    <>
      <div className="feature-item">
        <img loading="lazy" src={imgSrc} alt={altText} className="feature-img" />
        <div className="feature-label">{label}</div>
      </div>
      <p className="feature-description">{description}</p>
    </>
  );
}


  
function FeatureItem({ imgSrc, altText, label, description }) {
  return (
    <>
      <div className="feature-item">
        <img loading="lazy" src={imgSrc} alt={altText} className="feature-img" />
        <div className="feature-label">{label}</div>
      </div>
      <p className="feature-description">{description}</p>
    </>
  );
}


const testimonialsFrequently = [
  {
    title: "the best financial accounting app ever!",
    description:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    color: "dark",
    align: "left-align",
  },
  {
    title: "the best financial accounting app ever!",
    description:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    color: "light",
    align: "left-align",
  },
  {
    title: "the best financial accounting app ever!",
    description:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    color: "dark",
    align: "left-align",
  },
  {
    title: "the best financial accounting app ever!",
    description:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    color: "green",
    align: "left-align",
    background: "#FF5555"
  },
  {
    title: "the best financial accounting app ever!",
    description:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    color: "dark",
    align: "left-align",
  },
  {
    title: "the best financial accounting app ever!",
    description:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    color: "light",
    align: "left-align",
  },
];


  return (
    
    <>
    <div className="app-main-container">
      <Navbar/>





      <div className="main-container">
        <div className="image-div">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9860dd8-4209-49ce-93a8-902ef837b89a?apiKey=7e91cb269c0144af96e9f3d2d5576b41&"
            alt=""
            className="main-img"
          />
        </div>
        <div className="content-div ">
          <div className="content-header ">
            <h2 className="content-features">Features</h2>
            <h1 className="content-title">UIFry Premium</h1>
          </div>
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              imgSrc={feature.imgSrc}
              altText={feature.altText}
              label={feature.label}
              description={feature.description}
            />
          ))}
        </div>
      </div>





      <div className="container">
        <div className="content">
          <div className="text-div">
            <div>
              <header className="sub-header">Advantages</header>
              <h1 className="main-header">Why choose Uifry?</h1>
              {advantages.map((item, index) => (
                <AdvantageItem
                  key={index}
                  imgSrc={item.imgSrc}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>





      <div className="testimonial-div">
        <h1 className="div-title">Testimonial</h1>
        <h2 className="div-subtitle">What our users say about us?</h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem key={index} {...testimonial} />
          ))}
        </div>
      </div>





      <div className="faq-section">
        <header>
          <h1 className="title">faq</h1>
          <h2 className="subtitle">Frequently asked questions</h2>
        </header>
        <main className="testimonials-container">
          <div className="each-double-container">
            <div className="fq-each-container">
            <h2 className="fq-white-title">the best financial accounting app ever!</h2>
            <p className="fq-white-para">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className="fq-each-white-container">
            <h2 className="fq-black-title">the best financial accounting app ever!</h2>
            <p className="fq-black-para">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
          </div>
          <div className="each-double-container">
            <div className="fq-each-white-container">
            <h2 className="fq-black-title">the best financial accounting app ever!</h2>
            <p className="fq-black-para">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className="fq-each-container">
            <h2 className="fq-white-title">the best financial accounting app ever!</h2>
            <p className="fq-white-para">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
          </div>
          <div className="each-double-container">
            <div className="fq-each-container">
            <h2 className="fq-white-title">the best financial accounting app ever!</h2>
            <p className="fq-white-para">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className="fq-each-white-container">
            <h2 className="fq-black-title">the best financial accounting app ever!</h2>
            <p className="fq-black-para">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
          </div>
        </main>
      </div>












    <div className="frame">
      <div className="overlap">
        <div className="group">
          <div className="overlap-group">
            <div className="ellipse" />
            <div className="div" />
            <div className="ellipse-2" />
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-group">
            <div className="ellipse" />
            <div className="div" />
            <div className="ellipse-2" />
          </div>
        </div>
        <div className="group-wrapper">
          <div className="group-2">
            <div className="ready-to-get-started">Ready To Get Started?</div>
            <p className="risus-habitant-leo">Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.</p>
            <div className="div-wrapper">
              <div className="group-3">
              
            <div className="download-app-wrapper">
                  <div className="download-app">Download App <span style={{marginTop:"4px"}}><FaApple style={{marginLeft:"4px"}} size={25}/></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="overlap-group-wrapper">
          <div className="overlap-2">
            <div className="ellipse-3" />
            <div className="ellipse-4" />
          </div>
        </div>
        <div className="iphone-pro">
          <div className="overlap-3">
            <div className="element">
              <div className="mockup-wrapper">
                <img className="mockup" alt="i-phone-1" src={iphone3} />
                <img className="mockup-2" alt="Mockup" src={screen3} />
              </div>
            </div>
            <div className="element-2">
              <div className="overlap-4">
                <img className="shadow" alt="Shadow" src="{screen2}" />
                <img className="iphone-pro-max" alt="Iphone pro max" src={iphone2} />
                <img className="img" alt="Mockup" src={screen2} />
              </div>
            </div>
            <img className="shadow-2" alt="Shadow" src={"screen3"} />
            <div className="img-wrapper">
            <img className="iphone-pro-max" alt="Iphone pro max" src={iphone1} />
              <img className="mockup-2" alt="Mockup" src="{screen3} "/>
            </div>
          </div>
        </div>
        
        <img className="star" alt="Star" src="star-7.svg" />
        <img className="star-2" alt="Star" src="star-6.svg" />
      </div>
    </div>












<Footer/>
    </div>
    </>
    
  );
}

export default Home;