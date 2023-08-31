import React from "react";
import { Routes, Route } from "react-router-dom";

import CurrentWeather from "../widgets/CurrentWeather";
import Forecast from "../widgets/Forecast";
import Astronomy from "../widgets/Astronomy";

import "../styles/screens/Weather.scss";

interface Props {
    current: any;
    forecast: any;
    marine: any;
    astronomy: any;
    sports: any;
}

function Weather(props: Props) {
    const currentData = props.current;
    const forecastData = props.forecast;
    const astronomyData = props.astronomy;

    return (
        <div className="Weather">
            <div className="container">
                <Routes>
                    <Route path="/" element={<CurrentWeather data={currentData} />} />
                    <Route path="/forecast" element={<Forecast data={forecastData} />} />
                    <Route path="/astronomy" element={<Astronomy data={astronomyData} />} />
                    <Route path="*" element={<CurrentWeather data={currentData} />} />
                </Routes>
            </div>
        </div>
    );
}

export default Weather;