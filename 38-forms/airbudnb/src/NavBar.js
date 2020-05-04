import React from 'react'

const NavBar = ({ searchTerm, handleUpdateSearch }) => {
  return (
    <header>
      <h4 className="logo">AirBudnB</h4>
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