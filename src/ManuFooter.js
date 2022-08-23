import React from "react";
import "./CSS/manu.css";
import links from "./JS/UrlLink";
import "./JS/menu";
import { Link } from "react-router-dom";
import Henilcode from "./File/Henil.ico";
function Manu(props) {
  return (
    <>
      <div className="mamu_phone" id="PhoneManu">
        <div className="logo">
          {" "}
          <Link to={links.Navbar.Home}> Henil code </Link>
        </div>
        <i
          className="fa fa-bars"
          id="manu_bar"
          onClick={() => {
            document.getElementById("menu").style.display = "block";
          }}
        ></i>
      </div>
      <div className="main" id="menu">
        <div className="xl De_none">
          <i
            className="bi bi-x-lg"
            onClick={() => {
              document.getElementById("menu").style.display = "none";
            }}
          ></i>
        </div>
        <div className="nav_logo center De_none">
          <img src={Henilcode} className="imageP" alt="Henil" />
        </div>
        <div className="logo_name center">
          <div className="logo">
            {" "}
            <Link to={links.Navbar.Home}> Henil code </Link>
          </div>
        </div>
        <div className="manus center">
          <div className="manu_link">
            <Link to={links.Navbar.Home} id={props.Home ? "act" : "dct"}>
              {" "}
              <i className="fa fa-home"></i> Home
            </Link>
          </div>
          <div className="manu_link">
            <Link to={links.Navbar.Html} id={props.Html ? "act" : "dct"}>
              {" "}
              <i className="bi bi-forward"></i> html
            </Link>
          </div>
          <div className="manu_link">
            <Link to={links.Navbar.Project} id={props.Project ? "act" : "dct"}>
              <i className="bi bi-forward"></i> project{" "}
            </Link>
          </div>
          <div className="manu_link">
            <Link to={links.Navbar.About} id={props.About ? "act" : "dct"}>
              {" "}
              <i className="bi bi-person"></i> about
            </Link>
          </div>
          <div className="manu_link">
            <a href={links.Navbar.Signup} target="blank">
              <i className="bi bi-link-45deg"></i> Sign Up
            </a>
          </div>
        </div>
        <div className="FoT De_none">
          <div className="footer">
            <h2>
              <a
                href={links.Social.Instagram}
                target="blank"
                className="bi bi-instagram"
              >
                {" "}
              </a>
            </h2>
            <h2>
              <a
                href={links.Social.Facebook}
                target="blank"
                className="bi bi-facebook"
              >
                {" "}
              </a>
            </h2>
            <h2>
              <a href={links.Social.Wordpress} target="blank">
                <i className="fa fa-wordpress"></i>
              </a>
            </h2>
          </div>
          <div className="CoB">
            <span className="botF"> &copy; 2022 Henil Code </span>
          </div>
        </div>
      </div>
    </>
  );
}

function Footers() {
  return (
    <div className="FooterB center">
      <div className="Bfooter center">
        <div className="nav_link">
          <ul className="center">
            <li>
              <Link to={links.Navbar.Home}> Home</Link>
            </li>
            <li>
              <Link to={links.Navbar.Html}>html</Link>
            </li>
            <li>
              <Link to={links.Navbar.Project}>project</Link>
            </li>
            <li>
              <Link to={links.Navbar.About}>about</Link>
            </li>
            <li>
              <Link to={links.Navbar.Signup}>SignUp</Link>
            </li>
          </ul>
        </div>
        <div className="icon center">
          <h2>
            <a
              href={links.Social.Instagram}
              target="blank"
              className="bi bi-instagram"
            >
              {" "}
            </a>
          </h2>
          <h2>
            <a
              href={links.Social.Facebook}
              target="blank"
              className="bi bi-facebook"
            >
              {" "}
            </a>
          </h2>
          <h2>
            <a href={links.Social.Wordpress} target="blank">
              <i className="fa fa-wordpress"></i>
            </a>
          </h2>
        </div>
      </div>
      <span className="botF">&copy; 2022 Henil Code</span>
    </div>
  );
}

export { Manu };
export { Footers };
