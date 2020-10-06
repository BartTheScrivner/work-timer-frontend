import React, { Component } from 'react'
import { connect } from 'react-redux'

export const ProjectScrum = () => {
  return (
    <div>
      <div className="planned">
        Bleh
      </div>
      <div className="in-progress">
        Bleh
      </div>
      <div className="overtime">
        Bleh
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  project: state.projects
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectScrum)
