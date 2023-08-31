import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmptySearch from "../components/EmptySearch";
import Weather from "../screens/Weather";

import "../styles/pages/Home.scss";

function Home() {
    const [currentWeather, setCurrentWeather] = React.useState(null);
    const [forecast, setForecast] = React.useState(null);
    const [marine, setMarine] = React.useState(null);
    const [astronomy, setAstronomy] = React.useState(null);
    const [sports, setSports] = React.useState(null);

    let search = localStorage.getItem("search");

    const key = process.env.REACT_APP_API_KEY;
    const link = "http://api.weatherapi.com/v1";

    function saveSearch() {
        if (search) {
            localStorage.setItem("search", JSON.stringify(search));
        }
    }

    function getSearchWeather(value: string) {
        if (value) {
            search = value;
            saveSearch();
        }
    }

    React.useEffect(() => {
        function getDataFromApi(type: string = "current") {
            if (search) {
                axios.get(`${link}/${type}.json?key=${key}&q=${search}`)
                    .then((response) => {
                        console.log(type, response.data);
                        switch (type) {
                            case "current" || "search":
                                setCurrentWeather(response.data);
                                break;
                            case "forecast":
                                setForecast(response.data);
                                break;
                            case "marine":
                                setMarine(response.data);
                                break;
                            case "astronomy":
                                setAstronomy(response.data);
                                break;
                            case "sports":
                                setSports(response.data);
                                break;

                            default:
                                break;
                        }
                    })
                    .catch((error) => {
                        toast.error(error.message, {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    });
            }
        }

        function getDatas() {
            getDataFromApi();
            getDataFromApi("forecast");
            getDataFromApi("marine");
            getDataFromApi("astronomy");
            getDataFromApi("sports");
        }

        getDatas();
    }, [search, key]);

    return (
        <div className="Home">
            <div className="container">
                <Navbar onSearch={getSearchWeather} search={search ? search : ""} data={currentWeather} />
                {
                    search && currentWeather && forecast ?
                        <Weather
                            current={currentWeather}
                            forecast={forecast}
                            marine={marine}
                            astronomy={astronomy}
                            sports={sports}
                        />
                        : <EmptySearch onSearch={getSearchWeather} />
                }
                <Footer />
            </div>
        </div>
    );
}

export default Home;