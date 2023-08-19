import React from "react";

import Navbar from "../components/Navbar";
import Weather from "../components/Weather";
import Footer from "../components/Footer";

import "../styles/pages/Home.scss";

function Home() {
    const [search, setSearch] = React.useState("");

    const key = process.env.API_KEY;

    function onSearch(value: string) {
        if (value) {
            setSearch(value);
            console.log(value);
            console.log(key);
        }
    }

    return (
        <div className="Home">
            <div className="container">
                <Navbar onSearch={onSearch} />
                <Weather />
                <Footer />
            </div>
        </div>
    );
}

export default Home;