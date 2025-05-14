import { useState, useEffect } from "react";
import { FaWind } from "react-icons/fa";
import { GiMultiDirections } from "react-icons/gi";
import { IoEarth, IoRainySharp, IoWater } from "react-icons/io5";
import { BiSun } from "react-icons/bi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsCloudsFill } from "react-icons/bs";

import Spinner from "../components/Spinner";
import Switch from "../components/Switch";

import "../styles/widgets/CurrentWeather.scss";

interface Props {
    data: any;
}

function CurrentWeather(props: Props) {
    const [isCelsius, setIsCelsius] = useState(true);
    const [isKm, setIsKm] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    const data = props.data.current;
    const location = props.data.location;

    function delayDisplay() {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1000);
    }

    useEffect(() => {
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
                                        <img src={data.condition.icon} alt={data.condition.text} />
                                    </div>
                                    <div className="temperature">
                                        <h1>{isCelsius ? data.temp_c : data.temp_f}°{isCelsius ? "C" : "F"}</h1>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="location">
                                        <h2>{location.name}</h2>
                                        <h4>{location.region}, {location.country}</h4>
                                    </div>
                                    <div className="feelslike">
                                        <span>{data.condition.text}</span>
                                        <span>Feels like : {isCelsius ? data.feelslike_c : data.feelslike_f}°{isCelsius ? "C" : "F"}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="infos">
                                <section className="card">
                                    <span className="card__title">Wind</span>
                                    <div className="card__body">
                                        <div className="data">
                                            <span className="icon"><FaWind /></span>
                                            <span className="text">{isKm ? data.wind_kph : data.wind_mph} {isKm ? "km/h" : "mph"}</span>
                                        </div>
                                        <div className="data">
                                            <span className="icon"><GiMultiDirections /></span>
                                            <span className="text">{data.wind_dir}</span>
                                        </div>
                                    </div>
                                </section>
                                <section className="card">
                                    <span className="card__title">Humidity</span>
                                    <div className="card__body">
                                        <div className="data">
                                            <span className="icon"><IoWater /></span>
                                            <span className="text">{data.humidity}%</span>
                                        </div>
                                    </div>
                                </section>
                                <section className="card">
                                    <span className="card__title">Precipitation</span>
                                    <div className="card__body">
                                        <div className="data">
                                            <span className="icon"><IoRainySharp /></span>
                                            <span className="text">{data.precip_mm} mm</span>
                                        </div>
                                    </div>
                                </section>
                                <section className="card">
                                    <span className="card__title">Pressure</span>
                                    <div className="card__body">
                                        <div className="data">
                                            <span className="icon"><IoEarth /></span>
                                            <span className="text">{data.pressure_mb} mb</span>
                                        </div>
                                    </div>
                                </section>
                                <section className="card">
                                    <span className="card__title">UV</span>
                                    <div className="card__body">
                                        <div className="data">
                                            <span className="icon"><BiSun /></span>
                                            <span className="text">{data.uv}</span>
                                        </div>
                                    </div>
                                </section>
                                <section className="card">
                                    <span className="card__title">Visibility</span>
                                    <div className="card__body">
                                        <div className="data">
                                            <span className="icon"><AiFillEyeInvisible /></span>
                                            <span className="text">{data.vis_km} km</span>
                                        </div>
                                    </div>
                                </section>
                                <section className="card">
                                    <span className="card__title">Cloud</span>
                                    <div className="card__body">
                                        <div className="data">
                                            <span className="icon"><BsCloudsFill /></span>
                                            <span className="text">{data.cloud}%</span>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="switches">
                                <Switch isState={isCelsius} setIsState={setIsCelsius} option_1="C" option_2="F" />
                                <Switch isState={isKm} setIsState={setIsKm} option_1="km/h" option_2="mph" />
                            </div>
                        </section>
                        :
                        <div className="loading">
                            <Spinner />
                        </div>
                }
            </div>
        </div>
    );
}

export default CurrentWeather;
