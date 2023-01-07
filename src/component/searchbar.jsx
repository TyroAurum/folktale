import React from "react";
import { Input } from "reactstrap";
import './searchbar.css';

const SearchBar = ()=>{

    return(
        <>
        <Input className="search-box" placeholder="Search the Verse....." type="text" />
        </>
    )
}

export default SearchBar;