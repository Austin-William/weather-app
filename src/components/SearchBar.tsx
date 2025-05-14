import { IoSearchOutline } from "react-icons/io5";

import "../styles/components/SearchBar.scss";

interface SearchProps {
    onSearch: (search: string) => void;
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

export default SearchBar;