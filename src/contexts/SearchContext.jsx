import React, { createContext, useState, useEffect, useContext } from "react";
import { api } from "../services/api";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchDishes = async (query) => {
    try {
      const response = await api.get("/dishes", {
        params: { search: query },
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching dishes:", error);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      searchDishes(searchTerm);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
