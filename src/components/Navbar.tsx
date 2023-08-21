import React from "react";
import { IoSearchOutline } from "react-icons/io5";

import "../styles/components/Navbar.scss";

function Navbar(props: any) {
    function handleSearch(event: any) {
        if (event.key === "Enter") {
            props.onSearch(event.target.value);
        }
    }

    return (
        <div className="Navbar">
            <div className="container">
                <div className="wrapper">
                    <IoSearchOutline className="search__logo" />
                    <input className="search__input" type="text" placeholder="Search a city" onKeyDown={handleSearch} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;