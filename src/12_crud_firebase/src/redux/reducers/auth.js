import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    VERIFY_REQUEST,
    VERIFY_SUCCESS
  } from "../actions/auth";
  
export default (
    state = {
      isLoggingIn: false,
      isLoggingOut: false,
      isRegistered: false,
      isRegistering: false,
      isVerifying: false,
      loginError: false,
      logoutError: false,
      registerError:false,
      isAuthenticated: false,
      user: {}
    },
    action
  ) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
            ...state,
            isRegistering: true,
            registerError: false
            };
        case REGISTER_SUCCESS:
            return {
            ...state,
            isRegistering: false,
            isRegistered: true,
            user: action.user
            };
        case REGISTER_FAILURE:
            return {
            ...state,
            isRegistering: false,
            isRegistered: false,
            registerError: true
            };
        case LOGIN_REQUEST:
            return {
            ...state,
            isLoggingIn: true,
            loginError: false
            };
        case LOGIN_SUCCESS:
            return {
            ...state,
            isLoggingIn: false,
            isAuthenticated: true,
            user: action.user
            };
        case LOGIN_FAILURE:
            return {
            ...state,
            isLoggingIn: false,
            isAuthenticated: false,
            loginError: true
            };
        case LOGOUT_REQUEST:
            return {
            ...state,
            isLoggingOut: true,
            logoutError: false
            };
        case LOGOUT_SUCCESS:
            return {
            ...state,
            isLoggingOut: false,
            isAuthenticated: false,
            user: {}
            };
        case LOGOUT_FAILURE:
            return {
            ...state,
            isLoggingOut: false,
            logoutError: true
            };
        case VERIFY_REQUEST:
            return {
            ...state,
            isVerifying: true,
            verifyingError: false
            };
        case VERIFY_SUCCESS:
            return {
            ...state,
            isVerifying: false
            };
        default:
            return state;
    }
};