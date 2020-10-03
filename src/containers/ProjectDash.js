import React, { Component } from 'react'
import { connect } from 'react-redux'

export const ProjectDash = () => {
  return (
    <div>
      <div className="backlog">
      {/* Tasks where time is zero */}
      </div>
      <div className="in-progress">
      {/* Tasks where time is greater than zero and less than benchmark */}
      </div>
      <div className="overtime">
      {/* Tasks where time is greater than benchmark and status is not complete */}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  tasks: state.tasks
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDash)
