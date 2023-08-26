import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/Footer.scss";

function Footer() {
    const sections = [
        {
            title: "Features",
            links: [
                {
                    title: "Current Weather",
                    link: "/current-weather",
                },
                {
                    title: "Forecast",
                    link: "/forecast",
                },
                {
                    title: "Timezone",
                    link: "/timezone",
                },
                {
                    title: "Marine",
                    link: "/marine",
                },
                {
                    title: "Astronomy",
                    link: "/astronomy",
                },
                {
                    title: "Sports",
                    link: "/sports",
                },
            ],
        },
        {
            title: "Resources",
            links: [
                {
                    title: "Website",
                    link: "https://www.weatherapi.com/",
                },
                {
                    title: "Documentation",
                    link: "https://www.weatherapi.com/docs/",
                },
                {
                    title: "Weather API",
                    link: "https://www.weatherapi.com/api-explorer.aspx",
                },
            ],
        },
        {
            title: "Social",
            links: [
                {
                    title: "Github",
                    link: "https://github.com/Austin-William?tab=repositories",
                },
                {
                    title: "LinkedIn",
                    link: "https://www.linkedin.com/in/austin-william-lo/",
                },
            ]
        }
    ]

    return (
        <div className="Footer">
            <div className="container">
                <h1 className="title">Made by Austin-William Lo</h1>
                <div className="sections">
                    {sections.map((section, index) => (
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
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;