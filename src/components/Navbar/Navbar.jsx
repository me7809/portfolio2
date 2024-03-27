import React, { useState } from 'react'
import "./Navbar.css"
import Rotate from "react-reveal/Rotate";

function Navbar() {
   const [showMobile, setShowMobile] = useState(false);
   const [scroll, setScroll] = useState(false);
   let section = document.querySelectorAll(".app > div");
   let lists = document.querySelectorAll(".navbar ul li");
   window.onscroll = (_) => {
      window.scrollY > 100 ? setScroll(true) : setScroll(false);
      section.forEach((ele) => {
         let top = window.scrollY;
         let offset = ele.offsetTop;
         let height = ele.offsetHeight;
         let id = ele.getAttribute("id");
         if (top >= offset && top < offset + height) {
            lists.forEach((item) => {
               item.classList.remove("active");
               if (item.querySelector("a").getAttribute("href") == "#" + id) {
                  item.classList.add("active");
               }
            });
         }
      });
   };
   return (
      <Rotate top left>
         <div className="fixed">
            <div
               className={
                  scroll || showMobile
                     ? "navbar s_flex a_flex active-scroll"
                     : "navbar s_flex a_flex"
               }
            >
               <div
                  className="title grow1"
                  onClick={(_) => (window.location.href = "/")}
               >
                  <span>Nour</span>
                  <span>Eldin.</span>
               </div>
               <div className={showMobile ? "links active-navbar" : "links"}>
                  <ul className="d_flex gap1">
                     <li className="active">
                        <a href="#home">home</a>
                     </li>
                     <li>
                        <a href="#about">about</a>
                     </li>
                     <li>
                        <a href="#skills">skills</a>
                     </li>
                     <li>
                        <a href="#projects">projects</a>
                     </li>
                     <li>
                        <a href="#contact">contact</a>
                     </li>
                  </ul>
               </div>
               <div className="bar">
                  <span onClick={(_) => setShowMobile(!showMobile)}>
                     {showMobile ? (
                        <i className="fa-solid fa-xmark"></i>
                     ) : (
                        <i className="fa-solid fa-bars"></i>
                     )}
                  </span>
               </div>
            </div>
         </div>
      </Rotate>
   );
}

export default Navbar