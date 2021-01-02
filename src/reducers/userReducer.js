const initialState = {
  user: null,
  loggedIn: false
}

export default function userReducer(state = initialState, action) {
  let user;
  switch (action.type) {
    case 'START_LOGGING_IN':
      return {...state, loggedIn: true}
    case "SET_USER":
      user = action.data.user
      return {
        ...state,
        ...user
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