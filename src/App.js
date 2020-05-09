import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Table />
    </div>
  );
}

export default App;
