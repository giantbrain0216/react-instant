import React from "react";
import algoliasearch from "algoliasearch";
import { InstantSearch, SearchBox } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);

function Search() {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="movies"
    ></InstantSearch>
  );
}

const Header = () => (
  <header className="header">
    <SearchBox
      className="search-bar"
      translations={{ placeholder: "Search for Movies" }}
    />
  </header>
);


export default Search;
