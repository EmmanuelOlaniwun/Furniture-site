import React, {Component} from "react";
import "./nav.css";

let count;
const Nav = () => {
    const drop = ()=> {
        if (count==="") {
            document.getElementById("nav-list2").style.display="block"
            document.getElementById("dropdown").style.transform="rotate(450deg)"
            count = 1
        } else {
            document.getElementById("nav-list2").style.display="none"
            document.getElementById("nav-list2").style.paddingTop="5px"
            document.getElementById("dropdown").style.transform="rotate(271deg)"
            count=""
        }
    }

    return (
        <>
            <nav className="flex">
                <h1 className="title">Furn shop</h1>
                <div onClick={()=>{drop()}} id="dropdown">{"<"}</div>
                <div id="nav-list">
                    <a className="nav-item" href="#order">Order</a>
                    <a className="nav-item" href="#features">Features</a>
                </div>
            </nav>
            <div id="nav-list2">
                <a className="nav-item" href="#order">Order</a>
                <a className="nav-item" href="#features">Features</a>
            </div>
        </>
    )
}

export default Nav;