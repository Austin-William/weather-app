import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Drawer from "./Drawer";

import { sections } from "../data/datas";

import "../styles/components/Navbar.scss";

interface Props {
    search: string;
    data?: any;
    onSearch: (search: string) => void;
}

interface DisplayProps {
    search: string;
    data?: any;
    onSearch: (search: string) => void;
}

function DisplaySearch(props: DisplayProps) {
    const search = props.search;

    return (
        <div className="datas">
            <div className="datas__container">
                <Drawer onSearch={props.onSearch}>
                    {
                        sections.map((section, index) => (
                            <div className="drawer__section" key={index}>
                                <div className="drawer__wrapper">
                                    <span className="drawer__section__title">{section.title}</span>
                                    <ul className="drawer__section__list">
                                        {section.links.map((link, index) => (
                                            <li className="drawer__section__item" key={index}>
                                                <Link className="drawer__section__link" to={link.link}>{link.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </Drawer>
            </div>
            <span className="datas__container datas__title__center">
                Searched city : {search}
            </span>
            <span className="datas__container datas__title__right">
                Last updated : {props.data?.current.last_updated}
            </span>
        </div>
    )
}

function Navbar(props: Props) {
    const [search, setSearch] = useState("");
    const [activateSearchBar, setActivateSearchBar] = useState(false);

    function checkSearched() {
        if (search !== "") {
            setSearch(props.search);
            setActivateSearchBar(false);
        } else {
            setActivateSearchBar(true);
        }
    }

    function getSearch() {
        setSearch(props.search);
    }

    useEffect(() => {
        getSearch();
        checkSearched();
    });

    return (
        <div className="Navbar">
            <div className="Navbar__container">
                {
                    activateSearchBar ?
                        <h1 className="Navbar__empty__title">Please enter a city name</h1>

                        :
                        <DisplaySearch search={props.search} data={props.data} onSearch={props.onSearch} />
                }
            </div>
        </div>
    );
}

export default Navbar;