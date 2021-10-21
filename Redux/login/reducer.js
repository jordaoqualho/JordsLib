import * as types from "../types";

const initialState = {
  isLoggedIn: false,
  user: {
    usuario: "",
    nome: "",
    senha: "",
    tipoEntidade: "",
    idEntidade: ""
  },
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.user = action.payload.data;
      newState.isLoggedIn = true;
      return newState;
    }

    case types.LOGIN_LOGOUT: {
      const newState = { ...initialState };
      newState.isLoggedIn = false;
      return newState;
    }

    default:
      return state;
  }
};

export default loginReducer;
