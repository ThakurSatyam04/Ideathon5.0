import React from "react";
// import ideathon_logo from '../Assets/Ideathon4_new.svg'
import idea from "../Assets/idea.png"
import calender from '../Assets/calendar.svg'
import trophy from '../Assets/trophy.svg'
import './Landing.css'
// import '../Assets/Magz.otf'

function Landing () {
    return (
        <div class="header_section" id="home">
        <div class="header">
        <div class="main_section">
            {/* <div class="icon-landing"> */}
            {/* <img class="img_ideathon"src={idea} alt="" className="logo"/> */}
                <p class="ideathon">ideath<span class="o">o</span>n<span class="version">5.0</span></p>
                <pre><p class="tagline">WHERE  IDEAS  SPEAK</p></pre>
            {/* </div> */}
            <div class="btn">
                <button class="btn1">
                    <a href="https://unstop.com/competitions/ideathon-50-nitte-meenakshi-institute-of-technology-nmit-yelahanka-950328" className="btn-text">Apply now</a>
                </button>
            </div>
            <div class="content">
                <div class="price">
                    <img  src={calender} alt="" className="icon-landing"/>
                    <p>2nd MAY, 2024</p>
                </div>
                <div class="price">
                    <img src={trophy} alt="" className="icon-landing"/>
                    <p>Cash Prizes worth ₹ 80k+</p>
                </div>
            </div>
        </div>
        <div class="about_section" id="about">
            <div class="title-landing" >
                <p>About Us</p>
            </div>
            <div class="abt_content">
                <p>
                Ideathon is one of the flagship events of Enigma - Cell NMIT, the Entrepreneurship cell of Nitte Meenakshi Institute of Technology. It is an innovative and intense brainstorming event that encourages individuals from all over the nation to bring forward new and modern ideas to solve real-life issues. It is a platform where creativity and true potential help shape the future. 

                The competition typically requires participants to create a detailed business plan outlining their product or service, target market, financial projections, marketing strategy, and management structure. It is designed to encourage innovation and entrepreneurship and provide a platform for aspiring entrepreneurs to showcase their ideas and receive feedback from industry experts.

                </p>
            </div>
        </div>
        </div>
    </div>
    );
}

export default Landing
