import React from "react";
import img1 from "/images/dinning chair.jpeg";
import img2 from "/images/bed set.jpeg";
import "./Background.css";

const Background = () => {
    return (
        <div className="bg-container flex">
            <h1 className="description">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
            <div className="img-container">
                <img className="img-1" src={img1} alt="" />
                <img className="img-2" src={img2} alt="" />
            </div>
        </div>
    )
}

export default Background;