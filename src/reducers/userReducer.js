const initialState = {

}

export default function userReducer(state = {}, action) {
  let user;
  switch (action.type) {
    case 'START_LOGGING_IN':
      return {...state, loggedIn: true}
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
        return {
          ...state,
          loggedIn: false
        };
      default:
        return state;
    }
  }