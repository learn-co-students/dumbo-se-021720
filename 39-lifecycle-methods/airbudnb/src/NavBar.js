import React from 'react'

const NavBar = ({ searchTerm, handleUpdateSearch }) => {
  return (
    <header>
      <div className="logo"></div>
      <form className="search">
        <input type="text" placeholder="Search cities..." value={searchTerm} onChange={handleUpdateSearch} />
        <input type="submit" value="Search" />
      </form>
      <div className="actions">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  )
}

export default NavBar