import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
import "./Contact.css";
import Zoom from "react-reveal/Zoom";

function Contact() {
   const form = React.useRef();
   return (
      <div className="contact d_flex d_flex_column" id="contact">
      <Zoom bottom cascade>
            <div className="title">
               <h2>Contact Me</h2>
            </div>
            <div className="content_con d_flex">
               <div className="con_left grow1 ">
                  <Formik
                     initialValues={{
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                     }}
                     validationSchema={yup.object({
                        name: yup.string().trim().required("Please fill the name"),
                        email: yup
                           .string()
                           .email("please fill email")
                           .trim()
                           .required("Please fill the email"),
                        subject: yup
                           .string()
                           .trim()
                           .required("Please fill the subject"),
                        message: yup
                           .string()
                           .trim()
                           .required("Please fill the message"),
                     })}
                     onSubmit={(values, { setSubmitting }) => {
                        emailjs
                           .sendForm(
                              "service_26ducmv",
                              "template_oozfvug",
                              form.current,
                              "Cyw8I3AU-OigIy3AC"
                           )
                           .then(
                              (result) => {
                                 window.location.reload();
                              },
                              (error) => {
                                 console.log(error.text);
                              }
                           );
                        setSubmitting(false);
                     }}
                  >
                     <Form className="d_flex d_flex_column gap1" ref={form}>
                        <p>Message Me</p>
                        <div className="row d_flex gap1">
                           <Field type="text" placeholder="Name" name="name" />
                           <Field type="email" placeholder="Email" name="email" />
                        </div>
                        <div className="row d_flex gap1 div-err">
                           <p className="msgErr">
                              <ErrorMessage name="name" />
                           </p>
                           <p className="msgErr">
                              <ErrorMessage name="email" />
                           </p>
                        </div>
                        <Field type="text" placeholder="Subject" name="subject" />
                        <p className="msgErr">
                           <ErrorMessage name="subject" />
                        </p>
                        <Field
                           as="textarea"
                           placeholder="Message"
                           name="message"
                        ></Field>
                        <p className="msgErr">
                           <ErrorMessage name="message" />
                        </p>
                        <button type="submit">
                           Send Message
                           <i className="fa-solid fa-right-long"></i>
                        </button>
                     </Form>
                  </Formik>
               </div>
               <div className="con_right d_flex d_flex_column gap1 grow1">
                  <h3>Get in Touch</h3>
                  <a href="https://www.facebook.com/Noureldin1335" target="_blank">
                     <i className="fa-solid fa-user"></i>
                     Moustafa Ramdan
                  </a>
                  <a href="https://wa.me/+201277087708" target="_blank">
                     <i className="fa-brands fa-whatsapp"></i>
                     +201277087708
                  </a>
                  <a href="https://goo.gl/maps/4DM9wRWXfBQBXRgX7" target="_blank">
                     <i className="fa-solid fa-location-dot"></i>
                     Egypt, Asuet
                  </a>
                  <a href="mailto:mostafaramdan505@gmail.com">
                     <i className="fa-solid fa-at"></i>
                     mostafaramdan505@gmail.com
                  </a>
               </div>
            </div>
      </Zoom>
         </div>
   );
}

export default Contact