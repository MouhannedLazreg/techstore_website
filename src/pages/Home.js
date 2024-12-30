import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> LAZREG TechStore </h1>
        <p> Innovation is found here </p>
        <Link to="/products">
          <button> BROWSE NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
