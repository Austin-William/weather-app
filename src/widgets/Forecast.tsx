import React from "react";
import { FaWind } from "react-icons/fa";
import { CiTempHigh } from "react-icons/ci";
import { IoEarth, IoRainySharp, IoWater } from "react-icons/io5";
import { BiSun } from "react-icons/bi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsCloudsFill } from "react-icons/bs";

import Spinner from "../components/Spinner";
import Switch from "../components/Switch";

import "../styles/widgets/Forecast.scss";

interface Props {
    data: any;
}

function Forecast(props: Props) {
    const [isCelsius, setIsCelsius] = React.useState(true);
    const [isKm, setIsKm] = React.useState(true);
    const [isLoaded, setIsLoaded] = React.useState(false);

    const data = props.data.forecast.forecastday[0];

    function delayDisplay() {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1000);
    }

    React.useEffect(() => {
        delayDisplay();
    }, [isLoaded]);

    return (
        <div className="Forecast">
            <div className="container">
                {
                    isLoaded ?
                        <section className="content">
                            <h1 className="title">Forecast for today</h1>
                            <div className="forecast">
                                <div className="top">
                                    <div className="icon">
                                        <img src={data.day.condition.icon} alt="icon" />
                                    </div>
                                    <div className="text">
                                        <span className="date">{data.date}</span>
                                        <p className="description">{data.day.condition.text}</p>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <span className="bottom__title">
                                        Average data :
                                    </span>
                                    <div className="datas">
                                        <div className="card">
                                            <div className="icon">
                                                <CiTempHigh />
                                            </div>
                                            <div className="text-data">
                                                <span>{isCelsius ? data.day.avgtemp_c : data.day.avgtemp_f}°{isCelsius ? "C" : "F"}</span>
                                                <span>Max : {isCelsius ? data.day.maxtemp_c : data.day.maxtemp_f}°{isCelsius ? "C" : "F"}</span>
                                                <span>Min : {isCelsius ? data.day.mintemp_c : data.day.mintemp_f}°{isCelsius ? "C" : "F"}</span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="icon">
                                                <FaWind />
                                            </div>
                                            <div className="text-data">
                                                <span>{isKm ? data.day.maxwind_kph : data.day.maxwind_mph} {isKm ? "km/h" : "mph"}</span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="icon">
                                                <IoWater />
                                            </div>
                                            <div className="text-data">
                                                <span>{data.day.avghumidity}%</span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="icon">
                                                <AiFillEyeInvisible />
                                            </div>
                                            <div className="text-data">
                                                <span>{isKm ? data.day.avgvis_km : data.day.avgvis_miles} {isKm ? "km" : "miles"}</span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="icon">
                                                <BiSun />
                                            </div>
                                            <div className="tedxt-data">
                                                <span>{data.day.uv} UV</span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="icon">
                                                <IoRainySharp />
                                            </div>
                                            <div className="text-data">
                                                <span>{data.day.totalprecip_mm} mm</span>
                                                <span>{data.day.daily_chance_of_rain}%</span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="icon">
                                                <IoEarth />
                                            </div>
                                            <div className="text-data">
                                                <span>{data.day.totalprecip_in} in</span>
                                                <span>{data.day.daily_chance_of_snow}%</span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="icon">
                                                <BsCloudsFill />
                                            </div>
                                            <div className="text-data">
                                                <span>{data.day.avgvis_km} km</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="switches">
                                <Switch isState={isCelsius} setIsState={setIsCelsius} option_1="C" option_2="F" />
                                <Switch isState={isKm} setIsState={setIsKm} option_1="km/h" option_2="kph" />
                            </div>
                        </section>
                        :
                        <div className="loading">
                            <Spinner />
                        </div>
                }
            </div>
        </div>
    )
}

export default Forecast;