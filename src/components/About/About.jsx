import React from 'react'
import "./About.css"
import img from "../../assets/images/nour.jpg";
import { Flip, Zoom } from "react-reveal";
function About() {
   return (
      <div className="about" id="about">
         <Flip right cascade>
            <h2 className="title">About Me</h2>
         </Flip>
         <div className="about_content d_flex d_flex_wrap">
            <Zoom right cascade>
               <div className="grow1">
                  <div className="img">
                     <img src={img} alt="img" />
                  </div>
               </div>
               <div className="grow1 d_flex d_flex_column a_flex gap2">
                  <h3>Who I Am?</h3>
                  <span>
                     Hello! My name is{" "}
                     <span className="main_color">Moustafa Ramdan</span>, I am 23
                     years old, and I am a software developer
                  </span>
                  <span>
                     I have more than 5 years of experience and gained a lot of
                     experience in this field and I hope I can help you to
                     create a great website for your business
                  </span>
                  <a href="#" download>
                     Download Resume <i className="fa-solid fa-download"></i>
                  </a>
               </div>
            </Zoom>
         </div>
      </div>
   );
}

export default About