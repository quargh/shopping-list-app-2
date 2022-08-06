import React, {useState, useEffect} from "react";
import "./App.css";
import SearchInput from "./Components/SearchInput";
import {useFetch} from "./hooks/useFetch";
import AlleLebensmittel from "./Components/AlleLebensmittel";
import Einkaufsliste from "./Components/Einkaufsliste";
//Hallo Meral Test

export default function App() {
      const url = "https://fetch-me.vercel.app/api/shopping/items";

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

      const handleChange = () => {
      };

      return (
          <div className="App">
                <p>What do you wan´t to buy?</p>
                <Einkaufsliste/>
                <SearchInput/>
                <AlleLebensmittel lebensmittel={items}/>

          </div>
      );
}
