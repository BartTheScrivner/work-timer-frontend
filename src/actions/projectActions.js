const address = require("../../url.json")

export function addProject(project){
  return (dispatch) => {
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(project)
    }

    fetch(`http://localhost:3000/api/v1/projects`, request)
    .then(r => r.json())
    .then(project =>  dispatch({type: 'ADD_PROJECT', data}))
  }
}