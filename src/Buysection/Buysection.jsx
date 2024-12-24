import React from "react";
import chair from "/images/modern dinning furniture.jpeg";
import furnSet from "/images/outdoor furniture set.jpeg";
import officeSet from "/images/high end modern office furniture.jpeg";
import bedFrame from "/images/bed frame.jpeg";
import bedSet from "/images/bed set.jpeg";
import bedFurniture from "/images/bed furniture.jpeg";
import centerTable from "/images/center table.jpeg";
import designerBedroom from "/images/designer bedroom.jpeg";
import dinningSet from "/images/dinning table and chair set.jpeg";
import livingRoomSet from "/images/living room furniture.jpeg";
import officeTable from "/images/metal office table.jpeg";
import minimalistFurn from "/images/minimalist furniture.jpeg";
import officeChair from "/images/office chair.jpeg";
import outdoorChairs from "/images/outdoor chairs.jpeg";
import dinningChairs from "/images/dinning chair.jpeg";
import "./Buysection.css"

const Buysection = () => {
    return (
        <>
        <hr />
            <h2 style={{textAlign: "center"}}>Order</h2>
            <div>
                <div id="order" className="flex order-sect">
                    <div className="img-div">
                        <img className="img" src={chair} alt="" />
                        <h3>Dinning furniture</h3>
                        <p>$230</p>
                        <a href="mailto:emmanuelolaniwun@gmail.com" className="btn">Order</a>
                    </div>
                    <div className="img-div">
                        <img className="img" src={furnSet} alt="" />
                        <h3>Outdoor furniture set</h3>
                        <p>$300</p>
                        <a href="mailto:emmanuelolaniwun@gmail.com" className="btn">Order</a>
                    </div>
                    <div className="img-div">
                        <img className="img" src={officeSet} alt="" />
                        <h3>Office furniture set</h3>
                        <p>$350</p>
                        <a href="mailto:emmanuelolaniwun@gmail.com" className="btn">Order</a>
                    </div>
                    <div className="img-div">
                        <img className="img" src={bedFrame} alt="" />
                        <h3>Bedframe and mattress</h3>
                        <p>$400</p>
                        <a href="mailto:emmanuelolaniwun@gmail.com" className="btn">Order</a>
                    </div>                    
                    <div className="img-div">
                        <img className="img" src={bedSet} alt="" />
                        <h3>Bedroom furniture set</h3>
                        <p>$570</p>
                        <a href="mailto:emmanuelolaniwun@gmail.com" className="btn">Order</a>
                    </div>                    
                    <div className="img-div">
                        <img className="img" src={bedFurniture} alt="" />
                        <h3>Bedrooom furniture set 2</h3>
                        <p>$490</p>
                        <a href="mailto:emmanuelolaniwun@gmail.com" className="btn">Order</a>
                    </div>                    
                    <div className="img-div">
                        <img className="img" src={centerTable} alt="" />
                        <h3>Center table</h3>
                        <p>$200</p>
                        <a href="mailto:emmanuelolaniwun@gmail.com" className="btn">Order</a>
                    </div>                    
                    <div className="img-div">
                        <img className="img" src={designerBedroom} alt="" />
                        <h3>Designer bedroom</h3>
                        <p>$669</p>
                        <a href="mailto:emmanuelolaniwun@gmail.com" className="btn">Order</a>
                    </div>                    
                    <div className="img-div">
                        <img className="img" src={dinningSet} alt="" />
                        <h3>Designer dinning set</h3>
                        <p>$1080</p>
                        <a href="mailto:emmanuelolaniwun@gmail.com" className="btn">Order</a>
                    </div>                    
                    <div className="img-div">
                        <img className="img" src={livingRoomSet} alt="" />
                        <h3>Living room furniture</h3>
                        <p>$500</p>
                        <a href="mailto:emmanuelolaniwun@gmail.com" className="btn">Order</a>
                    </div>                  
                    <div className="img-div">
                        <img className="img" src={officeTable} alt="" />
                        <h3>Office table</h3>
                        <p>$150</p>  
                        <a href="mailto:emmanuelolaniwun@gmail.com" className="btn">Order</a>
                    </div>
                    <div className="img-div">
                        <img className="img" src={minimalistFurn} alt="" />
                        <h3>Minimalistic furniture</h3>
                        <p>$100</p>
                        <a href="mailto:emmanuelolaniwun@gmail.com" className="btn">Order</a>
                    </div>
                    <div className="img-div">
                        <img className="img" src={officeChair} alt="" />
                        <h3>Office chair</h3>
                        <p>$100</p>
                        <a href="mailto:emmanuelolaniwun@gmail.com" className="btn">Order</a>
                    </div>
                    <div className="img-div">
                        <img className="img" src={outdoorChairs} alt="" />
                        <h3>Outdoor chair</h3>
                        <p>$40</p>
                        <a href="mailto:emmanuelolaniwun@gmail.com" className="btn">Order</a>
                    </div>
                    <div className="img-div">
                        <img className="img" src={dinningChairs} alt="" />
                        <h3>Dinning chairs</h3>
                        <p>$160</p>
                        <a href="mailto:emmanuelolaniwun@gmail.com" className="btn">Order</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buysection;