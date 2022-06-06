// import api from "../services/api";

const FETCH_USER_STARTED = "user/fetchStarted";
const FETCH_USER_SUCCESS = "user/fetchSuccess";
const FETCH_USER_ERROR = "user/fetchError";

// const MOCKUP = {
//   name: "Usuario padrão",
//   birthday: "00/00/0000",
//   cpf: "000.00.000-00",
//   ddd: "047",
//   telephone: "00 0000-0000",
//   adress: "xxxxxxxxx, 000",
//   state: "XX",
//   city: "xxxxxxxxxxxx",
// };

const fetchUserStarted = () => ({
  type: FETCH_USER_STARTED,
});

const fetchUserSuccess = (data) => ({
  type: FETCH_USER_SUCCESS,
  payload: data,
});

const fetchUserError = (error) => ({
  type: FETCH_USER_ERROR,
  payload: error,
});

const initialState = {
  loading: false,
  // error: null,
  data: {
    name: "",
    birthday: "",
    cpf: "",
    ddd: "",
    telephone: "",
    address: "",
    state: "",
    city: "",
  },
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_STARTED: {
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    }
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    }
    case FETCH_USER_ERROR: {
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export const fetchUser = () => async (dispatch) => {
  try {
    dispatch(fetchUserStarted());
    // const { data } = await api.get("/user");
    // setTimeout(() => dispatch(fetchUserSuccess(data)), 1000);
  } catch (error) {
    dispatch(fetchUserError(error));
  }
};

export const saveUser = (payload) => async (dispatch) => {
  try {
    dispatch(fetchUserStarted());

    // api.post(`/user`, payload, {
    //   headers: { "Content-Type": "application/json" },
    // });
    dispatch(fetchUserSuccess(payload));
  } catch (error) {
    dispatch(fetchUserError(error));
  }
};
