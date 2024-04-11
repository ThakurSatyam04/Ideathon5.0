import React from "react";
import './Final.css'
import trophi from "../Assets/trophi.svg"

function Final () {
    return(
        <div class="final_section">
            <div class="contain">
                <div class="title-final">
                   <b> <p className="title-text">The Finals</p></b>
                </div>
                <div class="content-final">
                    <p className="text-final">Compete for a Prize Pool of</p>
                   <b> <p id="amt">₹80000</p></b>
                    <p id="line2">Get mentored, experience, funding and other added benefits</p>
                </div>
            </div>
            <div class="trophi">
                <img src={trophi} alt="" />
            </div>
        </div>
    );
}

export default Final
