import React from "react";
import Henil from "./File/HenilCode.ico"
import "./CSS/about.css";
import { Manu } from "./ManuFooter";

export default function AboutPage() {
  return (
    <>
    <Manu About="True"/>
      <div className="after_manu">
        <div className="contentent">
            <h1> About Us. </h1>
            <div className="personal_detail">
                <div className="about_containt">
                    <h3>Hello <i className="bi bi-emoji-smile"></i> Welcome To My Website. That Web-site in all Source code
                        is base of a
                        Web-Design Language.</h3>
                    <h3>That Web-site in Create Project & Program use HTML, CSS, Javascript and other Language & in
                        Web-site i am Provide <i className="bi bi-file-code"></i> Source Code of Program.</h3>
                        <h3>Thank You <i className="bi bi-emoji-smile"></i></h3>
                </div>
                <div className="img">
                    <h2> Web-Site Creater </h2>
                    <img src={Henil} alt="Henil"/>
                    <h3>Henil V. Prajapati </h3>
                    <h4> <i className="bi bi-envelope"></i> henilcode@gmail.com </h4>
                </div>
            </div>
            <div className="social_Admin none">

                <div className="social" align="center">
                    <h1> For Communication </h1>
                        <a href="https://www.facebook.com/henil.prajapati.376" ><i
                                className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/henil_v_p/" ><i
                                className="fa fa-instagram"></i></a>
                        <a href="https://henilcode.wordpress.com/" ><i className="fa fa-wordpress"></i></a>
                </div>
                <div className="admin">
                    <h1> Site Leadership </h1>
                    <h3>Henil Vinodbhai Prajapati<sup>[ Founder ][ CEO ]</sup></h3>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
