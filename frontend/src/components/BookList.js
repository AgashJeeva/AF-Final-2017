import React, { useEffect, useState } from "react";

import axios from "axios";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:5000/api/books");

    setBooks(res.data);
  };

  return (
    <div className="card">
      <h2>Book List</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>

            <th>ISBN</th>

            <th>Price</th>

            <th>Author</th>

            <th>Publisher</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.name}</td>

              <td>{book.isbn}</td>

              <td>{book.price}</td>

              <td>
                {book.author.firstName} {book.author.lastName}
              </td>

              <td>{book.publisher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
