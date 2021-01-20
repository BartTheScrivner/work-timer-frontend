import React from 'react'
import { connect } from 'react-redux'
import ProjectThumb from '../components/ProjectThumb/ProjectThumb'

export const Dashboard = (props) => {
  const {projects} = props
  return (
    <div className="container">
      <h1>Projects Dashboard</h1>
      {projects
      ? projects.forEach(project => <ProjectThumb project={project}/>)
      : "NOTHING HERE YET!"
    }
    </div>
  )
}

const mapStateToProps = (state) => ({
  projects: state.projects
})


export default connect(mapStateToProps)(Dashboard)