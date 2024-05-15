import React, { useState } from "react";
import cupcake from "../assets/cuppy/cupcake.png";
import image1 from "../assets/cuppy/5.jpeg";
import image2 from "../assets/cuppy/4.jpeg";
import image3 from "../assets/cuppy/8.jpeg";
import intro from "../assets/cuppy/intro.mp4";
import heroImg from "../assets/cuppy/heroImg.png";
import { Link } from "react-router-dom";
import "../stylesheets/Hero.css";
import Navbar from "./Navbar";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Hero = () => {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  const btnClicked = () => {
    setClicked(true);
    console.log("Clicked");
  };

  const btnClicked2 = () => {
    setClicked2(true);
    console.log("Clicked");
  };

  return (
    <section className="hero_section">
      <video src={intro} autoPlay loop muted id="myVideo" />
      <Navbar />
      <div className="hero_right">
        <h1>
          <span>Cuppy</span>
          <img src={cupcake} />
        </h1>
        <h3>Your internation DJ, Producer & Philanthropist</h3>
        <p>
          Cuppy holds degrees in business, music business, and African Studies
          from prestigious institutions
        </p>
        <div className="buttons">
          <Link to={"https://www.youtube.com/@cuppymusic"} target="_blank">
            <button
              onClick={btnClicked}
              className={`button ${clicked ? "active-button" : ""}`}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 45 45"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  transform="translate(1 1)"
                  stroke-width="2"
                >
                  <circle cx="22" cy="22" r="6" stroke-opacity="0">
                    <animate
                      attributeName="r"
                      begin="1.5s"
                      dur="3s"
                      values="6;22"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="stroke-opacity"
                      begin="1.5s"
                      dur="3s"
                      values="1;0"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="stroke-width"
                      begin="1.5s"
                      dur="3s"
                      values="2;0"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="22" cy="22" r="6" stroke-opacity="0">
                    <animate
                      attributeName="r"
                      begin="3s"
                      dur="3s"
                      values="6;22"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="stroke-opacity"
                      begin="3s"
                      dur="3s"
                      values="1;0"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="stroke-width"
                      begin="3s"
                      dur="3s"
                      values="2;0"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="22" cy="22" r="8">
                    <animate
                      attributeName="r"
                      begin="0s"
                      dur="1.5s"
                      values="6;1;2;3;4;5;6"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              </svg>
              Listen Now
            </button>
          </Link>
          <Link to="mailto:bookings@djuppy.com" target="_blank">
            <button
              onClick={btnClicked2}
              className={`button button-2 ${clicked2 ? "active-button-2" : ""}`}
            >
              Book Now
            </button>
          </Link>
        </div>
        <div className="gallery">
          <i className="gallery_controller">
            <FaAngleLeft />
          </i>
          <div className="images_flex">
            <div className="img_box">
              <img src={image1} />
            </div>
            <div className="img_box">
              <img src={image2} />
            </div>
            <div className="img_box">
              <img src={image3} />
            </div>
          </div>
          <i className="gallery_controller">
            <FaAngleRight />
          </i>
        </div>
      </div>
      <div className="hero_left">
        <div className="hero_img">
          <img src={heroImg} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
