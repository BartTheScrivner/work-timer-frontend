import React from 'react'
import {NavLink} from "react-router-dom"
import {connect} from "react-redux";
import {logoutUser} from "../actions/userActions"
import AuthModal from './AuthModal'

export const Navbar = (props) => {
    return (
        <>
            <div className="nav">
                <div className="nav-brand">o</div>
                <nav className="nav-menu">
                    <ul className="nav-items">
                        <li className="projects"><NavLink to="/projects">Projects</NavLink></li>
                        <li className="nav-item"><NavLink to="/insights">Insights</NavLink></li>
                        <li className="nav-item"><NavLink to="/settings">Settings</NavLink></li>
                        <li className="nav-item">
                            {
                                props.user.loggedIn
                                    ? <button onClick={props.logoutUser}>Logout</button>
                                    : <AuthModal/>
                            }
                        </li>

                    </ul>
                </nav>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps, {logoutUser})(Navbar);