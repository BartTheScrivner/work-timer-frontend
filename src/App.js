import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import DashboardContainer from './containers/DashboardContainer'
import InsightsContainer from './containers/InsightsContainer'
import ProjectContainer from './containers/ProjectContainer'
import Navbar from './components/Navbar'
import Welcome from './containers/Welcome'
import { setUser, logoutUser } from './actions/userActions'
import './App.css';

function App(props) {
  const {setUser} = props
  useEffect(() => {
    if (localStorage.token) {
      setUser()
    }
    return () => {
    }
  }, [setUser])
  return (
  <Router>
        <Navbar />
          <Route
            exact
            path="/"
            render={
              props.user.loggedIn === true
                ? () => <Redirect to="/projects" />
                : () => <Welcome />
            }
          />
          <Route
            exact
            path="/projects"
            render={
              !props.user.loggedIn === true
                ? () => <Redirect to="/" />
                : (rProps) => (<DashboardContainer {...rProps}/>)
            }
          />
          <Route
            path="/insights"
            render={
              !props.user.loggedIn === true
                ? () => <Redirect to="/" />
                : (rProps) => (<InsightsContainer {...rProps}/>)
            }
          />
          <Route
            path="/projects/:id"
            render={
              !props.user.loggedIn === true
                ? () => <Redirect to="/" />
                : (rProps) => (<ProjectContainer {...rProps}/>)
            }
          />
      </Router>
  )
}
const mapStateToProps = (state) => ({
  user: state.user,
  projects: state.projects
})

export default connect(mapStateToProps, { setUser, logoutUser })(App)
