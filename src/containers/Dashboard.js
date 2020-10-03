import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectThumb from '../components/ProjectThumb'

export const Dashboard = () => {
  return (
    <div>
      {props.projects.array.forEach(project => <ProjectThumb project={project}/>)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  projects: state.projects
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
