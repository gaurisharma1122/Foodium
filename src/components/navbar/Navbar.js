import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/context'
import { navLinks } from '../../data'
import "./Navbar.css"

const Navbar = () => {
  const { state, setActiveNavlink } = useGlobalContext();

  return (
    <nav>
      <div className="nav-container container">
        <div className="nav-logo">
          <Link to='/'><h1>Foodium</h1></Link>
        </div>
        
        <div className="nav-links">
          <ul>
            {
              navLinks.map((item) => {
                return (
                  <Link key={item.id} to={item.url}
                    className={state.activeNavLink === item.id ? 'active-navlink' : undefined}>
                    <li onClick={() => setActiveNavlink(item.id)} >
                      {item.title}
                    </li>
                  </Link>
                )
              })
            }
          </ul>
          <h4>{state.activeNavlink}</h4>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
