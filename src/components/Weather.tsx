import React from "react";

import CurrentWeather from "../screens/CurrentWeather";

import "../styles/components/Weather.scss";

interface Props {
    current: any;
    forecast: any;
    timezone: any;
    marine: any;
    astronomy: any;
    sports: any;
}

function Weather(props: Props) {
    const current = props.current;
    
    return (
        <div className="Weather">
            <div className="container">
                <CurrentWeather data={current} />
            </div>
        </div>
    );
}

export default Weather;