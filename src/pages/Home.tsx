import React from "react";

import Navbar from "../components/Navbar";
import Weather from "../components/Weather";
import Footer from "../components/Footer";

import "../styles/pages/Home.scss";

function Home() {
    return (
        <div className="Home">
            <div className="container">
                <Navbar />
                <Weather />
                <Footer />
            </div>
        </div>
    );
}

export default Home;