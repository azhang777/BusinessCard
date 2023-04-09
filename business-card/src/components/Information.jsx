import React from "react";
import Photo from "../assets/stock.png";
import Mail from "../assets/envelope-alt.svg";
import LinkedIn from "../assets/linkedin.svg";
export default function Info() {
  return (
    <div className="information">
      <img className="photo_picture" src={Photo} alt="" />
      <h1>Andy Zhang</h1>
      <h4>Developer</h4>
      <ul>
        <li>
          <a
            className="link"
            href="mailto:andyzhanggm@gmail.com?subject=Email Subject&body=Email Body"
            target="_blank"
          >
            <button className="mail_button">
              <img src={Mail} alt="" />
              <span>Mail</span>
            </button>
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://www.linkedin.com/in/azhang77/"
            target="_blank"
          >
            <button className="linked-in_button">
              <img src={LinkedIn} alt="" />
              <span>LinkedIn</span>
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
}
