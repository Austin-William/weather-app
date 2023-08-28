import React from "react";
import { IoSearchOutline } from "react-icons/io5";

import "../styles/components/Navbar.scss";
import Drawer from "./Drawer";

interface Props {
    search: string;
    data?: any;
    onSearch: (search: string) => void;
}

interface SearchProps {
    onSearch: (search: string) => void;
}

interface DisplayProps {
    search: string;
    data?: any;
}

function SearchBar(props: SearchProps) {
    function handleSearch(event: any) {
        if (event.key === "Enter") {
            props.onSearch(event.target.value);
            window.location.reload();
        }
    }

    return (
        <div className="search">
            <IoSearchOutline className="search__logo" />
            <input className="search__input" type="text" placeholder="Search a city" onKeyDown={handleSearch} />
        </div>
    )
}

function DisplaySearch(props: DisplayProps) {
    const search = props.search;

    return (
        <div className="datas">
            <div className="datas__container">
                <Drawer>
                    Test
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
                        <DisplaySearch search={props.search} data={props.data} />
                }
            </div>
        </div>
    );
}

export default Navbar;