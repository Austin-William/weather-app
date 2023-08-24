import React from "react";
import { FaWind } from "react-icons/fa";
import { GiMultiDirections } from "react-icons/gi";
import { IoEarth, IoRainySharp, IoWater } from "react-icons/io5";
import { BiSun } from "react-icons/bi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsCloudsFill } from "react-icons/bs";

import "../styles/widgets/CurrentWeather.scss";

interface Props {
    data: any;
}

function CurrentWeather(props: Props) {
    const [isCelsius, setIsCelsius] = React.useState(true);
    const [isKm, setIsKm] = React.useState(true);
    const [isLoaded, setIsLoaded] = React.useState(false);

    const data = props.data;

    function delayDisplay() {
        setTimeout(() => {
            setIsLoaded(true);
        }, 500);
    }

    React.useEffect(() => {
        delayDisplay();
    }, [isLoaded]);

    return (
        <div className="CurrentWeather">
            <div className="container">
                {
                    isLoaded ?
                        <section className="content">
                            <div className="weather">
                                <div className="top">
                                    <div className="image">
                                        <img src={data.current.condition.icon} alt={data.current.condition.text} />
                                    </div>
                                    <div className="temperature">
                                        <h1>{isCelsius ? data.current.temp_c : data.current.temp_f}°{isCelsius ? "C" : "F"}</h1>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="location">
                                        <h2>{data.location.name}</h2>
                                        <h4>{data.location.region}, {data.location.country}</h4>
                                    </div>
                                    <div className="feelslike">
                                        <span>{data.current.condition.text}</span>
                                        <span>Feels like : {isCelsius ? data.current.feelslike_c : data.current.feelslike_f}°{isCelsius ? "C" : "F"}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="infos">
                                <section className="card">
                                    <span className="card__title">Wind</span>
                                    <div className="card__body">
                                        <div className="data">
                                            <span className="icon"><FaWind /></span>
                                            <span className="text">{isKm ? data.current.wind_kph : data.current.wind_mph} {isKm ? "km/h" : "mph"}</span>
                                        </div>
                                        <div className="data">
                                            <span className="icon"><GiMultiDirections /></span>
                                            <span className="text">{data.current.wind_dir}</span>
                                        </div>
                                    </div>
                                </section>
                                <section className="card">
                                    <span className="card__title">Humidity</span>
                                    <div className="card__body">
                                        <div className="data">
                                            <span className="icon"><IoWater /></span>
                                            <span className="text">{data.current.humidity}%</span>
                                        </div>
                                    </div>
                                </section>
                                <section className="card">
                                    <span className="card__title">Precipitation</span>
                                    <div className="card__body">
                                        <div className="data">
                                            <span className="icon"><IoRainySharp /></span>
                                            <span className="text">{data.current.precip_mm} mm</span>
                                        </div>
                                    </div>
                                </section>
                                <section className="card">
                                    <span className="card__title">Pressure</span>
                                    <div className="card__body">
                                        <div className="data">
                                            <span className="icon"><IoEarth /></span>
                                            <span className="text">{data.current.pressure_mb} mb</span>
                                        </div>
                                    </div>
                                </section>
                                <section className="card">
                                    <span className="card__title">UV</span>
                                    <div className="card__body">
                                        <div className="data">
                                            <span className="icon"><BiSun /></span>
                                            <span className="text">{data.current.uv}</span>
                                        </div>
                                    </div>
                                </section>
                                <section className="card">
                                    <span className="card__title">Visibility</span>
                                    <div className="card__body">
                                        <div className="data">
                                            <span className="icon"><AiFillEyeInvisible /></span>
                                            <span className="text">{data.current.vis_km} km</span>
                                        </div>
                                    </div>
                                </section>
                                <section className="card">
                                    <span className="card__title">Cloud</span>
                                    <div className="card__body">
                                        <div className="data">
                                            <span className="icon"><BsCloudsFill /></span>
                                            <span className="text">{data.current.cloud}%</span>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="switches">
                                <div className="switch">
                                    <button className={isCelsius ? "active" : ""} onClick={() => setIsCelsius(true)} disabled={isCelsius}>C</button>
                                    <button className={!isCelsius ? "active" : ""} onClick={() => setIsCelsius(false)} disabled={!isCelsius}>F</button>
                                </div>
                                <div className="switch">
                                    <button className={isKm ? "active" : ""} onClick={() => setIsKm(true)} disabled={isKm}>km/h</button>
                                    <button className={!isKm ? "active" : ""} onClick={() => setIsKm(false)} disabled={!isKm}>mph</button>
                                </div>
                            </div>
                        </section>
                        :
                        <div className="loading">
                            <div className="spinner"></div>
                        </div>
                }
            </div>
        </div>
    );
}

export default CurrentWeather;
