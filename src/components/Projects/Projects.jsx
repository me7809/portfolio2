import React from 'react'
import "./Projects.css"
import pattern from "../../assets/images/pattern.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import Bounce from "react-reveal/Bounce";
import "swiper/css";
import "swiper/css";
import img from "../../assets/images/preview.png";
import img2 from "../../assets/images/img5.jpg";
import img3 from "../../assets/images/img6.jpg";
import img4 from "../../assets/images/img7.jpg";

function Projects() {
   const data = [
      { id: "1", img: img, link: "https://gpt-3-3.netlify.app/" },
      { id: "2", img: img2, link: "https://moviesredux.netlify.app/" },
      { id: "3", img: img3, link: "https://ramadia.sa/" },
      {
         id: "4",
         img: img4,
         link: "https://nourtaha13.github.io/lean-project/",
      },
   ];
   return (
       <Bounce left cascade>

         <div
            className="projects"
            id="projects"
            style={{ background: `url(${pattern})` }}
         >
            <div className="title d_flex c_flex">
               <h2>Projects</h2>
            </div>
            <div className="pro_content d_flex s_flex">
               <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  autoplay={{
                     delay: 3000,
                     disableOnInteraction: false,
                     pauseOnMouseEnter: true,
                  }}
               >
                  {data.map((data, i) => {
                     return (
                        <SwiperSlide key={data.id}>
                           <a href={data.link} target="_blank">
                              <img src={data.img} />
                           </a>
                        </SwiperSlide>
                     );
                  })}
               </Swiper>
            </div>
         </div>
       </Bounce>
   );
}

export default Projects