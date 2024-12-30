import React from "react";
import Aboutus from "../assets/aboutus.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Aboutus})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to LAZREG Techstore, your go-to destination for the latest gadgets, cutting-edge work essentials,
         and everything tech-related. We are passionate about providing innovative, high-quality products that make your life easier,
          more efficient, and a little more exciting. Whether you're looking for the perfect tools to enhance your productivity,
           stylish accessories to complement your devices, or the latest in tech trends, we’ve got you covered. At LAZREG Techstore,
            we prioritize excellent customer service, competitive pricing, and a seamless shopping experience.
             Join us on this tech journey and discover a world where technology meets convenience!
        </p>
      </div>
    </div>
  );
}

export default About;
