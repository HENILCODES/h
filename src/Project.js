import React from "react";
import { Manu } from "./ManuFooter";
import "./CSS/project.css";
import links from "./JS/UrlLink";


export default function ProjectPage() {
  let Project_Button = (url,title,date)=>{
      return(
        <>
        <a href={url} target="blank"> <button className="Pbutton"> {title}<i
        className="bi bi-arrow-bar-right"></i> <i className="bi bi-eye-fill"></i></button></a> <span
        className="Pdate"> <i className="bi bi-calendar-check-fill"></i>{date}</span>
        </>
      );
  }
  return (
    <>
    <Manu Project="True"/>
      <div className="after_manu">
        <div className="projects">
          {Project_Button(`${links.Project.Number_Guessing}`,"Number Guessing Game","12/ June/ 2022")}
          {Project_Button(`${links.Project.Music_Site}`,"Music Site","1/ June / 2022")}
          {Project_Button(`${links.Project.Dice_Roll}`,"Dice Roll Game","10/ May / 2022")}
          {Project_Button(`${links.Project.Dice_Roll}`,"Live Chat","20/ Aprile / 2022")}
          {Project_Button(`${links.Project.Dice_Roll}`,"Stop Watch","1/ Aprile / 2022")}
          {Project_Button(`${links.Project.Dice_Roll}`,"Digital Colock","7/ February / 2022")}
          {Project_Button(`${links.Project.Dice_Roll}`,"Tic Tac Toe Game","17/ January / 2022")}
          {Project_Button(`${links.Project.Dice_Roll}`,"Calculator","1/ January / 2022")}
          {Project_Button(`${links.Project.Dice_Roll}`,"Number & String Related","8/ December / 2021")}
        </div>
      </div>
    </>
  );
}
