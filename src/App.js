import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([
    {
      _id: "c2hvcHBpbmcuaXRlbTox",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Pineapple", de: "Ananas" },
    },
    {
      _id: "c2hvcHBpbmcuaXRlbToy",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Apples", de: "Äpfel" },
    },
    {
      _id: "c2hvcHBpbmcuaXRlbToz",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Apricots", de: "Aprikosen" },
    },
    {
      _id: "c2hvcHBpbmcuaXRlbTo0",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Artichokes", de: "Artischocken" },
    },
    {
      _id: "c2hvcHBpbmcuaXRlbTo1",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Aubergine", de: "Aubergine" },
    },
    {
      _id: "c2hvcHBpbmcuaXRlbTo2",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Oyster mushrooms", de: "Austernpilze" },
    },
    {
      _id: "c2hvcHBpbmcuaXRlbTo3",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Avocado", de: "Avocado" },
    },
    {
      _id: "c2hvcHBpbmcuaXRlbTo4",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Baby spinach", de: "Babyspinat" },
    },
    {
      _id: "c2hvcHBpbmcuaXRlbTo5",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Bananas", de: "Bananen" },
    },
  ]);

  const handleChange = () => {};

  return (
    <div className="App">
      <p>What do you wan´t to buy?</p>
      <div className="row">
        <input type="text" value={item} onChange={handleChange} />
        {list.map((listItem) => (
          <li>{listItem.name.de}</li>
        ))}
      </div>
    </div>
  );
}
