import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-brand">o</div>
        <nav className="nav-menu">
          <ul className="nav-items">
            <li className="projects"><NavLink to="/projects">Projects</NavLink></li>
            <li className="nav-item"><NavLink to="/insights">Insights</NavLink></li>
            <li className="nav-item"><NavLink to="/settings">Settings</NavLink></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
