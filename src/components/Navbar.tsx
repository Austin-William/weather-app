import React from "react";
import { Link } from "react-router-dom";

import Drawer from "./Drawer";
import SearchBar from "./SearchBar";

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
                            <div className="section" key={index}>
                                <div className="wrapper">
                                    <h2>{section.title}</h2>
                                    <ul>
                                        {section.links.map((link, index) => (
                                            <li key={index}>
                                                <Link to={link.link}>{link.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </Drawer>
            </div>
            <h1 className="datas__container datas__title__center">
                Searched city : {search}
            </h1>
            <h1 className="datas__container datas__title__right">
                Last updated : {props.data?.current.last_updated}
            </h1>
        </div>
    )
}

function Navbar(props: Props) {
    const [search, setSearch] = React.useState("");
    const [activateSearchBar, setActivateSearchBar] = React.useState(false);

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

    React.useEffect(() => {
        getSearch();
        checkSearched();
    });

    return (
        <div className="Navbar">
            <div className="Navbar__container">
                {
                    activateSearchBar ?
                        <SearchBar onSearch={props.onSearch} />
                        :
                        <DisplaySearch search={props.search} data={props.data} onSearch={props.onSearch} />
                }
            </div>
        </div>
    );
}

export default Navbar;