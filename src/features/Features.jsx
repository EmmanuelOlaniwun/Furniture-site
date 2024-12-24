import React from "react";
import "./Features.css";

const Features = () => {
    return (
        <>
        <hr style={{marginTop: "30px"}}/>
        <h2 style={{textAlign: "center", padding: "10px"}}>Features</h2>
        <div id="features" className="features-container flex">
            <div className="features">
                <h2>Excepteur</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod ncididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="features">
                <h2>Consequat</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse eu fugiat nulla pariatur.</p>
            </div>
            <div className="features">
                <h2>Occaecat</h2>
                <p>Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        </>
    )
}

export default Features