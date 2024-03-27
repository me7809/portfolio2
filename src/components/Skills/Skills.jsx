import React from 'react'
import { Zoom } from "react-reveal";
import Progress from "./Progress";
import "./Skills.css";
function Skills() {
   return (
      <div className="skills" id="skills">
         <Zoom bottom cascade>
            <div className="title">
               <h2>My Skills</h2>
            </div>
            <div className="skills_content d_flex"/>
               <div className="content_left grow1 d_flex d_flex_column gap2">
                  <h3>
                     My creative <span className="main_color">skills</span> and{" "}
                     <span className="main_color">experiences.</span>
                  </h3>
                  <p>
                     I build successful responsive websites that are easy to use
                     and designed with best practices. My main area of
                     ​​expertise is front end development, HTML, CSS and JS as
                     well as using ReactJS framework, backend using nodeJs and
                     express, using databases like MongoDB and mysql, building
                     small and medium web applications, custom plugins,
                     features, animations, and interactive layouts for coding.
                  </p>
               </div>
               <div className="content_right grow1 d_flex gap1 d_flex_column">
                  <Progress name="HTML" to="95%" />
                  <Progress name="CSS" to="85%" />
                  <Progress name="JavaScript" to="75%" />
                  <Progress name="ReactJS" to="80%" />
                  <Progress name="NodeJs" to="60%" />
                  <Progress name="python" to="50%" />
                  <Progress name="Network" to="58%" />
            </div>
         </Zoom>
      </div>
   );
}

export default Skills