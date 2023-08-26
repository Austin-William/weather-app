import React from "react";
import { Routes, Route } from "react-router-dom";

import CurrentWeather from "../widgets/CurrentWeather";
import Forecast from "../widgets/Forecast";

import "../styles/screens/Weather.scss";

interface Props {
    current: any;
    forecast: any;
    timezone: any;
    marine: any;
    astronomy: any;
    sports: any;
}

function Weather(props: Props) {
    const currentData = props.current;
    const forecastData = props.forecast;

    return (
        <div className="Weather">
            <div className="container">
                <Routes>
                    <Route path="/" element={<CurrentWeather data={currentData} />} />
                    <Route path="/forecast" element={<Forecast data={forecastData} />} />
                </Routes>
            </div>
        </div>
    );
}

export default Weather;