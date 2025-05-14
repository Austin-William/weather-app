import { useState, useEffect } from "react";

import Spinner from "../components/Spinner";

import "../styles/widgets/Astronomy.scss";

interface Props {
    data: any;
}

function Astronomy(props: Props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [backgroundSunset, setBackgroundSunset] = useState("");
    const [backgroundMoonset, setBackgroundMoonset] = useState("");

    const data = props.data.astronomy.astro;



    useEffect(() => {
        function delayDisplay() {
            if (backgroundMoonset && backgroundSunset) {
                setTimeout(() => {
                    setIsLoaded(true);
                }, 1000);
            }
        }

        setBackgroundSunset("https://source.unsplash.com/random/?sunset");
        setBackgroundMoonset("https://source.unsplash.com/random/?moonset");
        delayDisplay();
    }, [isLoaded, backgroundSunset, backgroundMoonset]);

    return (
        <div className="astronomy">
            {
                isLoaded ?
                    <div className="astronomy__container">
                        <div className="astronomy__title">
                            <h3>Astronomy</h3>
                        </div>
                        <div className="astronomy__container__content">
                            <section className="astronomy__card">
                                <img className="astronomy__card__image" src={backgroundSunset} alt="sunset__image" />
                                <div className="astronomy__card__left">
                                    <div className="astronomy__card__title">
                                        <h4>Sunrise</h4>
                                    </div>
                                    <div className="astronomy__card__content">
                                        <p>{data.sunrise}</p>
                                    </div>
                                </div>
                                <div className="astronomy__card__right">
                                    <div className="astronomy__card__title">
                                        <h4>Sunset</h4>
                                    </div>
                                    <div className="astronomy__card__content">
                                        <p>{data.sunset}</p>
                                    </div>
                                </div>
                            </section>
                            <section className="astronomy__card">
                                <img className="astronomy__card__image" src={backgroundMoonset} alt="sunset__image" />
                                <div className="astronomy__card__left">
                                    <div className="astronomy__card__title">
                                        <h4>Moonrise</h4>
                                    </div>
                                    <div className="astronomy__card__content">
                                        <p>{data.moonrise}</p>
                                    </div>
                                </div>
                                <div className="astronomy__card__right">
                                    <div className="astronomy__card__title">
                                        <h4>Moonset</h4>
                                    </div>
                                    <div className="astronomy__card__content">
                                        <p>{data.moonset}</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    :
                    <Spinner />
            }
        </div>
    );
}

export default Astronomy;