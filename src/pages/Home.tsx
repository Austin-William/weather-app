import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

import Navbar from "../components/Navbar";
import Weather from "../screens/Weather";
import Footer from "../components/Footer";

import "../styles/pages/Home.scss";

function Home() {
    const [search, setSearch] = React.useState("Paris");
    const [currentWeather, setCurrentWeather] = React.useState({});
    const [forecast, setForecast] = React.useState({});
    const [timezone, setTimezone] = React.useState({});
    const [marine, setMarine] = React.useState({});
    const [astronomy, setAstronomy] = React.useState({});
    const [sports, setSports] = React.useState({});

    const key = process.env.REACT_APP_API_KEY;
    const link = "http://api.weatherapi.com/v1";

    async function getDataFromApi(type: string = "current") {
        await axios.get(`${link}/${type}.json?key=${key}&q=${search}`)
            .then((response) => {
                switch (type) {
                    case "current" || "search":
                        setCurrentWeather(response.data);
                        break;
                    case "forecast":
                        setForecast(response.data);
                        break;
                    case "timezone":
                        setTimezone(response.data);
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

    function getSearch() {
        const tmp = localStorage.getItem("search");

        if (tmp) {
            setSearch(JSON.parse(tmp));
        }
    }

    function saveSearch() {
        localStorage.setItem("search", JSON.stringify(search));
    }

    function getSearchWeather(value: string) {
        if (value) {
            setSearch(value);
            saveSearch();
            getDataFromApi();
        }
    }

    React.useEffect(() => {
        getSearch();
        getDataFromApi();
        getDataFromApi("forecast");
    }, [search]);

    return (
        <div className="Home">
            <div className="container">
                <Navbar onSearch={getSearchWeather} />
                <Weather
                    current={currentWeather}
                    forecast={forecast}
                    timezone={timezone}
                    marine={marine}
                    astronomy={astronomy}
                    sports={sports}
                />
                <Footer />
            </div>
        </div>
    );
}

export default Home;