import { useState, useEffect} from "react";
import { toast } from "react-toastify";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmptySearch from "../components/EmptySearch";
import Weather from "../screens/Weather";

import "../styles/pages/Home.scss";

function Home() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [astronomy, setAstronomy] = useState(null);

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

    useEffect(() => {
        function getDataFromApi(type: string = "current") {
            if (search) {
                axios.get(`${link}/${type}.json?key=${key}&q=${search}`)
                    .then((response) => {
                        switch (type) {
                            case "current" || "search":
                                setCurrentWeather(response.data);
                                break;
                            case "forecast":
                                setForecast(response.data);
                                break;
                            case "astronomy":
                                setAstronomy(response.data);
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
            getDataFromApi("astronomy");
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
                            search={search}
                            current={currentWeather}
                            forecast={forecast}
                            astronomy={astronomy}
                        />
                        : <EmptySearch onSearch={getSearchWeather} />
                }
                <Footer />
            </div>
        </div>
    );
}

export default Home;