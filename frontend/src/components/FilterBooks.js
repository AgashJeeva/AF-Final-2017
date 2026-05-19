import React, { useEffect, useState } from "react";

import axios from "axios";

function FilterBooks() {
  const [authors, setAuthors] = useState([]);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadAuthors();
  }, []);

  const loadAuthors = async () => {
    const res = await axios.get("http://localhost:5000/api/authors");

    setAuthors(res.data);
  };

  const filterBooks = async (authorId) => {
    const res = await axios.get(
      `http://localhost:5000/api/books/author/${authorId}`,
    );

    setBooks(res.data);
  };

  return (
    <div className="card">
      <h2>Filter Books By Author</h2>

      <select onChange={(e) => filterBooks(e.target.value)}>
        <option>Select Author</option>

        {authors.map((author) => (
          <option key={author._id} value={author._id}>
            {author.firstName} {author.lastName}
          </option>
        ))}
      </select>

      <table>
        <thead>
          <tr>
            <th>Name</th>

            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.name}</td>

              <td>{book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FilterBooks;
