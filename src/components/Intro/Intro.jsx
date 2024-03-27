import React from 'react'
import "./Intro.css"
import img from "../../assets/images/web.jpg";
import bg from "../../assets/images/bg.svg";
import { Bounce, Zoom} from 'react-reveal';
;
function Intro() {
   return (
      <div
         className="intro c_flex"
         id="home"
         style={{
            background: `url(${bg})`,
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            backgroundSize: "contain",
         }}
      >
         <div className="content_left d_flex d_flex_column grow1">
            <span>Hello, i'm</span>
            <Bounce right cascade >
            <h1>Mousta Ramdan</h1>
            </Bounce>
            <span>Web Developer with Frontend and Backend</span>
            <a href="#contact" className="d_flex ca_flex">
               Content Me
               <i className="fa-solid fa-right-long"></i>
            </a>
            <div className="d_flex gap1 social">
               <a
                  href="https://github.com/Nourtaha13/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <i className="fa-brands fa-github"></i>
               </a>
               <a
                  href="https://www.facebook.com/Noureldin1335"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <i className="fa-brands fa-facebook"></i>
               </a>
               <a
                  href="https://twitter.com/Nour_Eldin15"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <i className="fa-brands fa-twitter"></i>
               </a>
               <a
                  href="http://wa.me/+201006260875"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <i className="fa-brands fa-whatsapp"></i>
               </a>
            </div>
         </div>
         <Zoom right>
            <div className="content_right grow1 d_flex">
               <img src={img} alt="img" />
            </div>
         </Zoom>
      </div>
   );
}

export default Intro
