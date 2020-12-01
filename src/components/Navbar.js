import React from 'react'
import { connect } from 'react-redux'

export const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-brand">o</div>
        <div className="nav-menu">
          <ul className="nav-items">
            <li className="projects">Projects</li>
            <li className="nav-item">Dashboard</li>
            <li className="nav-item">Settings</li>
          </ul>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
