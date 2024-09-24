import React from 'react'
import './home.css'

const home = () => {
  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br /> Crypto Marketplace</h1>
        <p>Welcome to the world's largest cryptocurrency market place. Sign Up to explore more.</p>
        <form action="">
          <input type="text" placeholder='Search crypto...' />
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default home