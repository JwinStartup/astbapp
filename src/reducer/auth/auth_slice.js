import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { history, fetchWrapper } from "../helpers/helpers.js";

// create slice

const name = "auth";
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

// exports

export const authActions = { ...slice.actions, ...extraActions };
export const authReducer = slice.reducer;

// implementation

function createInitialState() {
  return {
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
    error: null,
    estTeste: JSON.parse(localStorage.getItem("user")).estTeste,
  };
}

function createReducers() {
  return {
    logout,
  };

  function logout(state) {
    state.user = null;
    localStorage.removeItem("user");
    history.navigate("/login");
  }
}

function createExtraActions() {
  return {
    login: login(),
    estTeste: estTeste(),
  };

  function login() {
    return createAsyncThunk(
      `${name}/login`,
      async ({ email, password }) =>
        await fetchWrapper.post(
          `https://astrainingbusiness-crud.onrender.com/api/users/connexion`,
          { email, password }
        )
    );
  }

  function estTeste() {
    return createAsyncThunk(
      `${name}/teste`,
      async ({ id_user, note, type }) => {
        console.log(id_user, note, type);
        await fetchWrapper.post(
          "https://astrainingbusiness-crud.onrender.com/api/users/tester",
          { id_user, note, type }
        );
      }
    );
  }
}

function createExtraReducers() {
  return {
    ...login(),
    ...estTester(),
  };

  function login() {
    var { pending, fulfilled, rejected } = extraActions.login;
    return {
      [pending]: (state) => {
        state.error = null;
      },
      [fulfilled]: (state, action) => {
        const user = action.payload;

        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));
        state.user = user;

        // get return url from location state or default to home page
        const { from } = history.location.state || { from: { pathname: "/" } };
        history.navigate(from);
      },
      [rejected]: (state, action) => {
        state.error = action.error;
      },
    };
  }

  function estTester() {
    var { pending, fulfilled, rejected } = extraActions.estTeste;
    return {
      [pending]: (state) => {
        state.error = null;
      },
      [fulfilled]: (state, action) => {
        // const user = action.payload;
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem("user", JSON.stringify(user));
        state.estTeste = true;
      },
      [rejected]: (state, action) => {
        state.error = action.error;
      },
    };
  }
}
