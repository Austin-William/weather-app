import React from "react";

import "../styles/components/Weather.scss";

interface Props {
    current: any;
    search: any;
    forecast: any;
    timezone: any;
    marine: any;
    astronomy: any;
    sports: any;
}

function Weather(props: Props) {
    return (
        <div className="Weather">
            <div className="container">
                <h1>Weather</h1>
            </div>
        </div>
    );
}

export default Weather;