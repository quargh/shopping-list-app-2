import React, { useState, useEffect } from "react";
import "./App.css";
import SearchInput from "./Components/SearchInput";
import {useFetch} from "./hooks/useFetch";
//Hallo Meral Test

export default function App() {
  const url = "https://fetch-me.vercel.app/api/shopping/items";

  // [Array, Funktion um Array zu ändern] = (Initialzustand)
  const [items, setItems] = useState([])

  const [data] = useFetch(url);
  // Mit useEffect in Kombination [] haben wir die Möglichkeit etwas 1x(Zeile 11 fetchdata) durchzuführen .


  useEffect(() => {
    setItems(data);
    console.log(items);
  }, [data]);

  //const [item, setItem] = useState("");
  //const [list, setList] = useState([]);

  const handleChange = () => {};

  return (
    <div className="App">
      <p>What do you wan´t to buy?</p>
      <SearchInput />
    </div>
  );
}
