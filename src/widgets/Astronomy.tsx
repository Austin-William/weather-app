import React from "react";

import "../styles/widgets/Astronomy.scss";

interface Props {
    data: any;
}

function Astronomy(props: Props) {
    const { data } = props;

    return (
        <div className="astronomy">
            <div className="astronomy__container">
                <div className="astronomy__title">
                    <h3>Astronomy</h3>
                </div>
                <div className="astronomy__container__content">
                    <section className="astronomy__card">
                        <img className="astronomy__card__image" src="https://source.unsplash.com/random/?sunset" alt="sunset__image" />
                        <div className="astronomy__card__left">
                            <div className="astronomy__card__title">
                                <h4>Sunrise</h4>
                            </div>
                            <div className="astronomy__card__content">
                                <p>{data.astronomy.astro.sunrise}</p>
                            </div>
                        </div>
                        <div className="astronomy__card__right">
                            <div className="astronomy__card__title">
                                <h4>Sunset</h4>
                            </div>
                            <div className="astronomy__card__content">
                                <p>{data.astronomy.astro.sunset}</p>
                            </div>
                        </div>
                    </section>
                    <section className="astronomy__card">
                        <img className="astronomy__card__image" src="https://source.unsplash.com/random/?moonset" alt="sunset__image" />
                        <div className="astronomy__card__left">
                            <div className="astronomy__card__title">
                                <h4>Moonrise</h4>
                            </div>
                            <div className="astronomy__card__content">
                                <p>{data.astronomy.astro.moonrise}</p>
                            </div>
                        </div>
                        <div className="astronomy__card__right">
                            <div className="astronomy__card__title">
                                <h4>Moonset</h4>
                            </div>
                            <div className="astronomy__card__content">
                                <p>{data.astronomy.astro.moonset}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Astronomy;