import React from "react";

import "../styles/components/EmptySearch.scss";

function EmptySearch() {
    return (
        <div className="EmptySearch">
            <div className="container">
                <h1 className="title">Please enter a city name</h1>
            </div>
        </div>
    );
}

export default EmptySearch;