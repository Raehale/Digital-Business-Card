import React from "react";
import "./Info.css";
import profile from "/assets/rae-and-arlo-square.jpg"

export default function Info() {
    return (
        <header className="info__section">
            <img src={profile} 
                className="profile__photo" 
                alt="Rae looking at the camera smiling while sitting on a couch with a cat, Arlo, beside her." 
            />

            <h1 className="info__header">Rae Haley</h1>

            <p className="info__sub__title">Junior Front End Developer</p>

            <a href="mailto:alyssarae98ha@gmail.com" className="info--link">
                <button className="info__btn">
                    <i className="fa-solid fa-envelope"></i>
                    Email
                </button>
            </a>

        </header>
    );
}