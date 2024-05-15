import React,{useState} from "react";
import { Link } from "react-router-dom";
import {FaHeart} from "react-icons/fa"
import {AiOutlineHeart} from "react-icons/ai"
import about from "../assets/cuppy/about.png"
import image2 from "../assets/cuppy/2.jpeg"
import image9 from "../assets/cuppy/9.jpeg"
import "../stylesheets/About.css"

const About = () => {

    const [clicked2, setClicked2] = useState(false);

    const btnClicked2 = () => {
      setClicked2(true);
      console.log("Clicked");
    };

  return (
    <section className="about">
      <div className="about_flex">
        <div className="about_left">
          <h3>A B O U T</h3>
          <p>
            Cuppy, a philanthropist and stylista with her signature pink hair,
            is not just a musician but a passionate advocate for pushing
            boundaries and embracing new experiences. She believes in the
            importance of encouraging young people to explore the uncharted
            territories of life, stepping out of their comfort zones to discover
            their true potential.
          </p>
          <p>
            Her music is a vibrant reflection of this ethos, blending bold beats
            with meaningful lyrics that resonate with her audience, encouraging
            them to live boldly and embrace their uniqueness.
          </p>
          <div className="about_btns">
          <Link  to="" target='_blank'>
            <button
            onClick={btnClicked2}
             className={`button button-2 ${clicked2 ? 'active-button-2' : ''}`}>Read More</button>  
            </Link>
            <div className="likes">
                <i><AiOutlineHeart/></i>
                <span>93.1k</span>
            </div>
          </div>
        </div>
        <div className="about_right">
                <div className="image_flex">
                        <div className="top">
                            <img src={about}/>
                        </div>
                        <div className="bottom">
                        <img src={image2}/>
                        <img src={image9}/>
                        </div>
                </div>
        </div>
      </div>
    </section>
  );
};

export default About;
