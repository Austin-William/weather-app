import React from "react";

import SearchBar from "./SearchBar";

import "../styles/components/EmptySearch.scss";

interface Props {
    onSearch: (search: string) => void;
}

function EmptySearch(props: Props) {
    return (
        <div className="EmptySearch">
            <div className="container">
                <SearchBar onSearch={props.onSearch} />
            </div>
        </div>
    );
}

export default EmptySearch;