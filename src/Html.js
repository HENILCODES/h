import React from "react";
import "./CSS/content.css";
import { Manu } from "./ManuFooter";

export default function HtmlPage() {
  let ProgramBlock = (n, title) => {
    let DisplayButton = (n1) => {
      document.getElementById("PB" + n1).classList.toggle("ActProg");
      document.getElementById("PH" + n1).classList.toggle("ActPh");
      // document.querySelector(".fold").classList.remove("Actfold");
    };

    function HTML(program) {
      var Code = new XMLHttpRequest();
      Code.onload = function () {
        document.getElementById("DATACODE" + program).innerText =
          this.responseText;
      };
      Code.open("GET", "Program/P" + program + "/p" + program + "ht.html");
      Code.send();
    }
    function CSS(program) {
      var Code = new XMLHttpRequest();
      Code.onload = function () {
        document.getElementById("DATACODE" + program).innerText =
          this.responseText;
      };
      Code.open("GET", "Program/P" + program + "/p" + program + "cs.css");
      Code.send();
    }
    function JAVASCRIPT(program) {
      var Code = new XMLHttpRequest();
      Code.onload = function () {
        document.getElementById("DATACODE" + program).innerText =
          this.responseText;
      };
      Code.open("GET", "Program/P" + program + "/p" + program + "ja.js");
      Code.send();
    }
    return (
      <>
        <div
          id={"PH" + n}
          className="h1"
          onClick={() => {
            DisplayButton(n);
          }}
        >
          <h1>
            <a href={"#PH" + n}>#</a> {n + title}
            <i className="bi bi-file-earmark-code"></i>
            <i className="bi bi-hand-index-thumb"></i>
          </h1>
          <span className="date">
            <i className="bi bi-calendar-check-fill">&nbsp;</i>28/Dec/2021
          </span>
        </div>
        <div className="Program" id={"PB" + n}>
          <span>
            <input
              type="button"
              className={`HTML${n}`}
              value="HTML"
              onClick={() => {
                HTML(n);
              }}
            />
          </span>
          <span>
            <input
              type="button"
              className={`CSS${n}`}
              value="CSS"
              onClick={() => {
                CSS(n);
              }}
            />
          </span>
          <span>
            <input
              type="button"
              className={`CSS${n}`}
              value="JAVASCRIPT"
              onClick={() => {
                JAVASCRIPT(n);
              }}
            />
          </span>
          <a href="Program/P1/p1ht.html" target="blank">
            <input type="button" className="OUTPUT" value="OUTPUT" />
            <br />
          </a>
          <pre className={`dataC P${n}CODEBLOCK`} id={"DATACODE" + n}></pre>
        </div>
      </>
    );
  };

  return (
    <>
      <Manu Html="True" />
      <div className="after_manu">
        <div className="content">
          {/* <div className="fold_bt">
            <button className="fold Actfold">
              Collapse<i className="bi bi-arrows-collapse"></i>
            </button>
          </div> */}
          {ProgramBlock("1", " Audio & Video Tag use ")}
          {ProgramBlock("2", " Log in Page With Validation. ")}
          {ProgramBlock("3", " Multiplication Table. ")}
          {ProgramBlock("4", " Calculate Two Number. ")}
          {ProgramBlock("5", " Find Factorial Of Number. ")}
          {ProgramBlock("6", " Loading Page. ")}
          {ProgramBlock("7", " Simple Manu Bar. ")}
          {ProgramBlock("8", " Auto Type word effect. ")}
          {ProgramBlock("9", " Log in Page With CSS. ")}
        </div>
      </div>
    </>
  );
}
