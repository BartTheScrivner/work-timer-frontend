import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';

function App() {
  return (
  <Router>
        <NavBar />
          <Route
            exact
            path="/"
            render={
              this.props.user.loggedIn
                ? () => <Redirect to="/projects" />
                : () => <Welcome />
            }
          />
          <Route
            exact
            path="/projects"
            render={
              !this.props.user.loggedIn
                ? () => <Redirect to="/" />
                : (rProps) => (<DashboardContainer {...rProps}/>)
            }
          />
          <Route
            path="/insights"
            render={
              !this.props.user.loggedIn
                ? () => <Redirect to="/" />
                : (rProps) => (<InsightsContainer {...rProps}/>)
            }
          />
          <Route
            path="/projects/:id"
            render={
              !this.props.user.loggedIn
                ? () => <Redirect to="/" />
                : (rProps) => (<ProjectContainer {...rProps}/>)
            }
          />
      </Router>
  )
}

export default App;
