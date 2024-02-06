import React from 'react';
import Header from './header/Header';
import Title from './title/Title';
import Book from './book/Book';
import Footer from './footer/Footer';
import bookList from '../database/books';
import { useState } from 'react';
import LoginPage from './login/Login';
import Form from './form/Form';

export default function MainComponent() {

  const [books, setBooks] = useState(bookList);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const handleLogin = (name, email) => {
    setAuthenticated(true);
    setAuthenticatedUser({ name, email });
  };

  function updateState(title, pages) {
    const newBook = {
      title: title,
      pages: pages,
      isFavorite: false,
      isRead: false,
      id: books.length + 1,
    }; 
    setBooks([...books, newBook]);
  }



  function handleToggleFavorite(bookId) {
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === bookId) {
          // Inverte o status do favorito
          const updatedBook = { ...book, isFavorite: !book.isFavorite };
          return updatedBook;
        }
        // Desmarca os outros livros como favoritos
        return { ...book, isFavorite: false };
      })
    );
  }

  return (
    <div className="main">
      {isAuthenticated ? (
        <>
        <Header userName={authenticatedUser && authenticatedUser.name} />
          <div className="container">
            <Title>
              Meus livros: <s>Livros emprestados</s>
            </Title>
              <ul>
                {books.map((book) => (
                  <Book key={book.id} book={book} onToggleFavorite={handleToggleFavorite} />
                ))}
              </ul>
            <Form
              submitFunction={updateState}
            />
            <Footer userName={authenticatedUser && authenticatedUser.name} />
          </div>
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}
