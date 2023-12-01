import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Card.css';

const Card = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)

      .then((response) => {
        setBooks(response.data.items);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [searchTerm]);

  const handleDetailClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="card-container">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.volumeInfo.imageLinks?.thumbnail} />
          <h3>{book.volumeInfo.title}</h3>
          <p><b>Author</b>: {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
          <p><b>Page Count:</b> {book.volumeInfo.pageCount}</p>
          <button className='detailBtn' onClick={() => handleDetailClick(book)}>Detail</button> <br />
          <a className='preview' href={book.volumeInfo.previewLink} target="_blank">Preview</a>
        </div>
      ))}

      {selectedBook && (
        <Detail bookDetails={selectedBook} onClose={handleCloseModal} />
      )}
    </div>
  );
};

const Detail = ({ bookDetails, onClose }) => {
  if (!bookDetails || !bookDetails.volumeInfo) {
    return null;
  }

  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{bookDetails.volumeInfo.title}</h2>
        <p><b>Author:</b> {bookDetails.volumeInfo.authors && bookDetails.volumeInfo.authors.join(', ')}</p>
        <p><b>Page Count:</b> {bookDetails.volumeInfo.pageCount}</p>
        {bookDetails.volumeInfo.description ? <p> <b>Description :</b> {bookDetails.volumeInfo.description}</p> : "Melumat yoxdur"}

      </div>
    </div>
  );
}

export { Card, Detail };
