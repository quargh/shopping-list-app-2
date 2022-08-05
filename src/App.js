import React, { useState, useEffect } from "react";
import "./App.css";
import SearchInput from "./Components/SearchInput";
//Hallo Meral Test

export default function App() {
  const url = "https://fetch-me.vercel.app/api/shopping/items";

  // Mit useEffectin Kombination [] haben wir die Möglichkeit etwas 1x(Zeile 11 fetchdata) durchzuführen .
  useEffect(() => {
    fetchdata(url);
  }, []);
  // Hier definieren wir was passieren soll.Definieren der Funktion
  async function fetchdata(url) {
    // Daten holen von url
    const response = await fetch(url);
    // Hier werden die url daten in json parsen (umwandeln/konvertiert).
    const data = response.json();
  }

  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleChange = () => {};

  return (
    <div className="App">
      <p>What do you wan´t to buy?</p>
      <SearchInput />
    </div>
  );
}
