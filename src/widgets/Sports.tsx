import React from 'react';
import axios from 'axios';
import { toast } from "react-toastify";

import Spinner from "../components/Spinner";

import '../styles/widgets/Sports.scss';

interface Props {
    search: string;
}

function Sports(props: Props) {
    const [isLoaded, setIsLoaded] = React.useState(false);

    const [searchedStadium, setSearchedStadium] = React.useState('');
    const [searchedCountry, setSearchedCountry] = React.useState('');
    const [searchedRegion, setSearchedRegion] = React.useState('');
    const [searchedTournament, setSearchedTournament] = React.useState('');
    const [searchedMatch, setSearchedMatch] = React.useState('');

    const [displayStadiumSearchBar, setDisplayStadiumSearchBar] = React.useState(false);
    const [displayCountrySearchBar, setDisplayCountrySearchBar] = React.useState(false);
    const [displayRegionSearchBar, setDisplayRegionSearchBar] = React.useState(false);
    const [displayTournamentSearchBar, setDisplayTournamentSearchBar] = React.useState(false);
    const [displayMatchSearchBar, setDisplayMatchSearchBar] = React.useState(false);

    const key = process.env.REACT_APP_API_KEY;
    const link = "http://api.weatherapi.com/v1";
    const search = props.search;

    function resetDisplayedSearchBar() {
        setDisplayStadiumSearchBar(false);
        setDisplayCountrySearchBar(false);
        setDisplayRegionSearchBar(false);
        setDisplayTournamentSearchBar(false);
        setDisplayMatchSearchBar(false);
    }

    function requestSearch() {
        setIsLoaded(false);
        axios.get(`${link}/sports.json?key=${key}&q=${search}&stadium=${searchedStadium}&country=${searchedCountry}&region=${searchedRegion}&tournament=${searchedTournament}&match=${searchedMatch}`)
            .then((response) => {
                console.log(response.data);
                setIsLoaded(true);
            }
            )
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

    function delayDisplay() {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1000);
    }

    React.useEffect(() => {
        delayDisplay();
    }, [isLoaded]);

    return (
        <div className='sports'>
            {
                isLoaded ?
                    <div className="sports__container">
                        <div className='sports__header'>
                            <h1 className="sports__title">Sports</h1>
                            <p className='sports__description'>Search for sports events in your area!</p>
                            <span className="sports__available__list__title">
                                Available sports:
                            </span>
                            <ul className="sports__available__list">
                                <div className="sports__available__list__item">
                                    <li>Baseball</li>
                                    <li>Golf</li>
                                    <li>Cricket</li>
                                </div>
                            </ul>
                        </div>
                        <details className='sports__container__searchs'>
                            <summary className='sports__container__searchs__title'>Search by:</summary>
                            <div className='sports__container__displays__checkbox'>
                                <div className='sports__container__displays__checkbox__item'>
                                    <div className='sports__container__displays__checkbox__item__top'>
                                        <input type="checkbox" id="stadium" name="stadium" value="stadium" onChange={() => setDisplayStadiumSearchBar(!displayStadiumSearchBar)} />
                                        <label htmlFor="stadium">Stadium</label>
                                    </div>
                                    <div className='sports__container__displays__checkbox__item__bottom'>
                                        {
                                            displayStadiumSearchBar ?
                                                <div className='sports__container__displays__searchs__item'>
                                                    <input type="text" placeholder="Stadium" onChange={(e) => setSearchedStadium(e.target.value)} />
                                                </div>
                                                :
                                                <></>
                                        }
                                    </div>
                                </div>
                                <div className='sports__container__displays__checkbox__item'>
                                    <div className='sports__container__displays__checkbox__item__top'>
                                        <input type="checkbox" id="country" name="country" value="country" onChange={() => setDisplayCountrySearchBar(!displayCountrySearchBar)} />
                                        <label htmlFor="country">Country</label>
                                    </div>
                                    <div className='sports__container__displays__checkbox__item__bottom'>
                                        {
                                            displayCountrySearchBar ?
                                                <div className='sports__container__displays__searchs__item'>
                                                    <input type="text" placeholder="Country" onChange={(e) => setSearchedCountry(e.target.value)} />
                                                </div>
                                                :
                                                <></>
                                        }
                                    </div>
                                </div>
                                <div className='sports__container__displays__checkbox__item'>
                                    <div className='sports__container__displays__checkbox__item__top'>
                                        <input type="checkbox" id="region" name="region" value="region" onChange={() => setDisplayRegionSearchBar(!displayRegionSearchBar)} />
                                        <label htmlFor="region">Region</label>
                                    </div>
                                    <div className='sports__container__displays__checkbox__item__bottom'>
                                        {
                                            displayRegionSearchBar ?
                                                <div className='sports__container__displays__searchs__item'>
                                                    <input type="text" placeholder="Region" onChange={(e) => setSearchedRegion(e.target.value)} />
                                                </div>
                                                :
                                                <></>
                                        }
                                    </div>
                                </div>
                                <div className='sports__container__displays__checkbox__item'>
                                    <div className='sports__container__displays__checkbox__item__top'>
                                        <input type="checkbox" id="tournament" name="tournament" value="tournament" onChange={() => setDisplayTournamentSearchBar(!displayTournamentSearchBar)} />
                                        <label htmlFor="tournament">Tournament</label>
                                    </div>
                                    <div className='sports__container__displays__checkbox__item__bottom'>
                                        {
                                            displayTournamentSearchBar ?
                                                <div className='sports__container__displays__searchs__item'>
                                                    <input type="text" placeholder="Tournament" onChange={(e) => setSearchedTournament(e.target.value)} />
                                                </div>
                                                :
                                                <></>
                                        }
                                    </div>
                                </div>
                                <div className='sports__container__displays__checkbox__item'>
                                    <div className='sports__container__displays__checkbox__item__top'>
                                        <input type="checkbox" id="match" name="match" value="match" onChange={() => setDisplayMatchSearchBar(!displayMatchSearchBar)} />
                                        <label htmlFor="match">Match</label>
                                    </div>
                                    <div className='sports__container__displays__checkbox__item__bottom'>
                                        {
                                            displayMatchSearchBar ?
                                                <div className='sports__container__displays__searchs__item'>
                                                    <input type="text" placeholder="Match" onChange={(e) => setSearchedMatch(e.target.value)} />
                                                </div>
                                                :
                                                <></>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='sports__searchs__buttons'>
                                <button className='sports__container__searchs__button' onClick={() => requestSearch()}>Search</button>
                                <button className='sports__container__searchs__button' onClick={() => resetDisplayedSearchBar()}>Reset</button>
                            </div>
                        </details>
                        <section className='sports__content'>

                        </section>
                    </div>
                    :
                    <Spinner />
            }
        </div>
    )
}

export default Sports;