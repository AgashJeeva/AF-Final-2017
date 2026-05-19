import React from "react";

import "./App.css";

import AddBook from "./components/AddBook";

import BookList from "./components/BookList";

import FilterBooks from "./components/FilterBooks";

function App() {
  return (
    <div className="container">
      <h1>British Council Library</h1>

      <AddBook />

      <FilterBooks />

      <BookList />
    </div>
  );
}

export default App;
