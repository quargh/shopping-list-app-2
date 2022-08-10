import React, {useState, useEffect} from "react";
import "./App.css";
import SearchInput from "./Components/SearchInput";
import {useFetch} from "./hooks/useFetch";
import AlleLebensmittel from "./Components/AlleLebensmittel";
import Einkaufsliste from "./Components/Einkaufsliste";

import {WenigLebensmittel} from "./Components/WenigLebensmittel";
import {search} from "fast-fuzzy";
//Hallo Meral Test

export default function App() {
      const url = "https://fetch-me.vercel.app/api/shopping/items";


      const [searchInputText, setSearchInputText] = useState("");
      const [searchedItems, setSearchedItems] = useState([]);
      const [searchResults, setSearchResults] = useState([]);

      const [someLebensmittel, setSomeLebensmittel] = useState([...WenigLebensmittel]);

      // [Array, Funktion um Array zu ändern] = (Initialzustand)
      const [items, setItems] = useState([]);
      const [einkaufsliste, setEinkaufsliste] = useState([]);

      const [data] = useFetch(url);
      // Mit useEffect in Kombination [] haben wir die Möglichkeit etwas 1x(Zeile 11 fetchdata) durchzuführen .

      useEffect(() => {
            setItems(data);

      }, [data]);

      console.log(items);

      //const [item, setItem] = useState("");
      //const [list, setList] = useState([]);

      function handleSearchEvent(inputText) {
            setSearchInputText(inputText)
      }

      useEffect(() => {
      // Funktion ist unten definiert
            runFuzzySearch(searchInputText);
      }, [searchInputText])

      function runFuzzySearch(searchString){

            // Mit Fuzzy Results gemäß unseres Search Strings filtern
            const fuzzyResults = search(searchString, items, {keySelector: (obj) => obj.name.de});
            //searchResults mit fuzzyResults aktualisieren
            setSearchResults(fuzzyResults);

            // Unseren Array 'someLebensmittel' aka Einkaufsliste updaten:
            //setSomeLebensmittel(searchResults);

      }

      useEffect(() => {
            setSearchedItems(searchResults);
      }, [searchResults]);

      return (
          <div className="App">
                <p>What do you wan´t to buy?</p>
                <AlleLebensmittel lebensmittel={someLebensmittel}/>
                <Einkaufsliste/>
                <SearchInput onHandleSearchEvent={handleSearchEvent}/>
                <AlleLebensmittel lebensmittel={searchedItems}/>

          </div>
      );
}
