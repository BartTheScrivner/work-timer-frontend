import React from 'react'
import { connect } from 'react-redux'
import {Icon} from 'semantic-ui-react'
import ProjectThumb from '../components/ProjectThumb/ProjectThumb'

export const Dashboard = (props) => {
  const {projects} = props
  return (
    <div className="container">
      <div className="row-nowrap dashboard-header">
        <span className='large label'>Projects Dashboard</span>
        <span className={'containable right-labeled-icon'}>
          <Icon name="plus" size='large'/>
          <span className='medium label'>Add a New Project</span>
        </span>
      </div>
      <hr/>
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