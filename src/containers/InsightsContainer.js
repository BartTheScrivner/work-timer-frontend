import React, { Component } from 'react'
import { connect } from 'react-redux'

export const InsightsContainer = () => {
  return (
    <div>
      BLEH
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  projects: state.projects,
  tasks: state.tasks
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(InsightsContainer)
