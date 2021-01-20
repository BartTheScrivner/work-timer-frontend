// parses fetch responses by setting JWT authentication token
// and dispatching user to userReducer
function __handleLogin(data, dispatch){
  console.log("HITTING LOGIN STUFF \n DATA: ", data);
  localStorage.token = data.token
  localStorage.current = data.id
  dispatch({type: 'SET_USER', data})
}

function __handleError(err, dispatch) {
  dispatch({type: 'LOGOUT_USER'})
  console.log(err)
}

export function setUser () {
  return (dispatch) => {
    dispatch({type: 'START_LOGGING_IN'});
    let request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    }
    fetch(`http://localhost:3000/api/v1/users/${localStorage.current}`, request)
    .then(r => r.json())
    .then(data => __handleLogin(data, dispatch))
    .catch(err => __handleError(err, dispatch))
  }
}

export function loginUser(login){
  return (dispatch) => {
    dispatch({type: 'START_LOGGING_IN'});
    let request = {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
      },
      body: JSON.stringify(login)
    }
    fetch(`http://localhost:3000/api/v1/login`, request)
    .then(r => r.json())
    .then(data => __handleLogin(data, dispatch))
    .catch((err) => __handleError(err, dispatch))
  }
}

export function updateUser(data) {
  return {
    type: "UPDATE_USER",
    user: data.user
  }
}

export function logoutUser() {
  return {type: 'LOGOUT_USER'}
}