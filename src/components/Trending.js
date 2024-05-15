import React from "react";
import image1 from "../assets/cuppy/13.png"
import image2 from "../assets/cuppy/8.jpeg"
import "../stylesheets/Trending.css"

const Trending = () => {
  return (
    <section className="trending">
        <div className="trending_center">
      <h3>
        <span>CUPPY'S</span> TRENDINGS
      </h3>
      <div className="trending_grid">
        <div className="song_box">
          <span>...</span>
          <div className="sb_image">
            <img src={image1}/>
          </div>
          <div className="sb_details">
            <h4>Africa Now Cuppy</h4>
            <button>Play</button>
          </div>
        </div>

        <div className="song_box">
          <span>...</span>
          <div className="sb_image">
          <img src={image2}/>
          </div>
          <div className="sb_details">
            <h4>BBC Radio Live</h4>
            <button>Play</button>
          </div>
        </div>

        <div className="song_box">
          <span>...</span>
          <div className="sb_image">
          <img src={image1}/>
          </div>
          <div className="sb_details">
            <h4>Apple Radio Live</h4>
            <button>Play</button>
          </div>
        </div>

        
        <div className="song_box">
          <span>...</span>
          <div className="sb_image">
          <img src={image1}/>
          </div>
          <div className="sb_details">
            <h4>Wale latest song</h4>
            <button>Play</button>
          </div>
        </div>

        <div className="song_box">
          <span>...</span>
          <div className="sb_image">
          <img src={image1}/>
          </div>
          <div className="sb_details">
            <h4>Cup  cakes</h4>
            <button>Play</button>
          </div>
        </div>


      </div>
      </div>
    </section>
  );
};

export default Trending;
