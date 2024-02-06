import React from 'react';
import User from '../user/User';
import './Header.css';

export default function Header({ userName }) {
  return (
    <header className='header'>
      <p className='header-user'>
        Olá{' '}
        <User userName={userName} />
      </p>
    </header>
  );
}
