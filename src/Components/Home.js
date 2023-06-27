import React from 'react'
import Navbar from './Navbar'

import BannerBackground from "../Assets/img.jpg";
import BannerImage from "../Assets/bg.jpg";

import { FiArrowRight } from "react-icons/fi";

const home = () => {
  return (
    <div className="home-container">
    <Navbar />
    <div className="home-banner-container">
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <div className="home-text-section">
        <h1 className="primary-heading">
          Getting to know React</h1>
        <p className="primary-text">
        As you can see it helps to create good looking UI.
        </p>
        <button className="secondary-button">
          Call Us <FiArrowRight />{" "}
        </button>
      </div>
      <div className="home-image-section">
        <img src={BannerImage} alt="" />
      </div>
    </div>
  </div>
  )
}

export default home