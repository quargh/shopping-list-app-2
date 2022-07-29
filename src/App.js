import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  item = [
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
  ];

  const handleSubmit = () => {};
  const handleChange = () => {};

  function App() {
    return (
      <div className="App">
        <h1> Shopping List App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={item} onChange={handleChange} />
          <button type="submit">ADD</button>
        </form>
      </div>
    );
  }
};
export default App;
