import React from "react";
import { Link } from "react-router-dom";

import { sections } from "../data/datas";

import "../styles/components/Footer.scss";

function Footer() {


    return (
        <div className="Footer">
            <div className="container">
                <h1 className="title">Made by Austin-William Lo</h1>
                <div className="sections">
                    {
                        sections.map((section, index) => (
                            <div className="section" key={index}>
                                <div className="wrapper">
                                    <h2>{section.title}</h2>
                                    <ul>
                                        {section.links.map((link, index) => (
                                            <li key={index}>
                                                <Link to={link.link}>{link.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Footer;