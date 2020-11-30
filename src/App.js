import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import DashboardContainer from './containers/DashboardContainer'
import InsightsContainer from './containers/InsightsContainer'
import ProjectContainer from './containers/ProjectContainer'
import Navbar from './components/Navbar'
import Welcome from './containers/Welcome'
import './App.css';

function App(props) {
  return (
  <Router>
        <Navbar />
          <Route
            exact
            path="/"
            render={
              props.user.loggedIn
                ? () => <Redirect to="/projects" />
                : () => <Welcome />
            }
          />
          <Route
            exact
            path="/projects"
            render={
              !props.user.loggedIn
                ? () => <Redirect to="/" />
                : (rProps) => (<DashboardContainer {...rProps}/>)
            }
          />
          <Route
            path="/insights"
            render={
              !props.user.loggedIn
                ? () => <Redirect to="/" />
                : (rProps) => (<InsightsContainer {...rProps}/>)
            }
          />
          <Route
            path="/projects/:id"
            render={
              !props.user.loggedIn
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

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
