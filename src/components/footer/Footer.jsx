import React from 'react'
import User from '../user/User'
import './Footer.css'

export default function Footer({ userName }) {
    return (
      <footer className='footer'>
        <p>
          Acessado como <User userName={userName} />
        </p>
      </footer>
    )
}
