const initialState = {
  loggedIn: false
}

export default function userReducer(state = initialState, action) {
  let user;
  switch (action.type) {
    case 'START_LOGGING_IN':
      user = {...state, loggedIn: true}
      return user
    case "LOGIN_USER":
      return {
        ...state,
        ...user,
        loggedIn: true
      };
    case "SET_USER":
      return {
        ...state,
        ...user,
        loggedIn: true
      };
    case "UPDATE_USER":
      return {
        ...state,
        ...action.user
      };
      case "LOGOUT_USER":
        localStorage.clear()
        return initialState;
      default:
        return state;
    }
  }