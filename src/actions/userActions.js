function handleLogin(data, dispatch){
  console.log("HITTING LOGIN STUFF \n DATA: ", data);
  localStorage.token = data.token
  dispatch({type: 'SET_USER', data})
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
    .then(data => handleLogin(data, dispatch))
    .catch(() => dispatch({type: 'LOGOUT_USER'}))
  }
};

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
    .then(data => handleLogin(data, dispatch))
    .catch(() => dispatch({type: 'LOGOUT_USER'}))
  }
};

export function updateUser(data) {
  return {
    type: "UPDATE_USER",
    user: data.user
  }
}

export function logoutUser() {
  return {type: 'LOGOUT_USER'}  
}
