import React, { useEffect, useState } from "react";

import axios from "axios";

function AddBook() {
  const [authors, setAuthors] = useState([]);

  const [book, setBook] = useState({
    name: "",

    isbn: "",

    price: "",

    year: "",

    publisher: "",

    author: "",
  });

  // LOAD AUTHORS
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/authors")

      .then((res) => {
        setAuthors(res.data);
      });
  }, []);

  // HANDLE CHANGE
  const handleChange = (e) => {
    setBook({
      ...book,

      [e.target.name]: e.target.value,
    });
  };

  // ADD BOOK
  const addBook = async () => {
    await axios.post("http://localhost:5000/api/books", book);

    alert("Book Added");
  };

  return (
    <div className="card">
      <h2>Add Book</h2>

      <input
        type="text"
        name="name"
        placeholder="Book Name"
        onChange={handleChange}
      />

      <input
        type="text"
        name="isbn"
        placeholder="ISBN"
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        onChange={handleChange}
      />

      <input
        type="number"
        name="year"
        placeholder="Year"
        onChange={handleChange}
      />

      <input
        type="text"
        name="publisher"
        placeholder="Publisher"
        onChange={handleChange}
      />

      <select name="author" onChange={handleChange}>
        <option>Select Author</option>

        {authors.map((author) => (
          <option key={author._id} value={author._id}>
            {author.firstName} {author.lastName}
          </option>
        ))}
      </select>

      <button onClick={addBook}>Add Book</button>
    </div>
  );
}

export default AddBook;
