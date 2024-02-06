import React, { useState } from 'react';
import './Book.css';

export default function Book({ book, onToggleFavorite }) {
  const [readIcon, setReadIcon] = useState('⏳');

  const handleToggleFavorite = () => {
    onToggleFavorite(book.id);
  };

  const handleToggleRead = () => {
    setReadIcon((prevIcon) => (prevIcon === '⏳' ? '✅' : '⏳'));
  }

  return (
    <li className='book-item'>
      <span
      className='read-emoji'
      onClick={handleToggleRead}
      >{readIcon}</span>
      <span>{`${book.title} (${book.pages} páginas)`}</span>
      {' '}
      <span
        className={`favorite-emoji ${book.isFavorite ? '' : 'opaque'}`}
        role="img"
        aria-label="Favorite"
        onClick={handleToggleFavorite}
      >
        🤩
      </span>
    </li>
  );
}
