import {
  GET_USERDATA,
  USERDATA_ERROR,
  CLEAR_USERDATA,
  CLEAR_USERSDATA,
  GET_USERSDATA,
  DELETE_USERDATA,
  ADD_COMMENT,
  ADD_COMMENTACI,
  ADD_COMMENTACII,
  ADD_COMMENTACIII,
  ADD_COMMENTDCI,
  ADD_COMMENTDCII,
  ADD_COMMENTDCIII,
  REMOVE_COMMENT
} from '../actions/types';

const initialState = {
  userdata: null,
  usersdata: [],
  repos: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USERDATA:
      return {
        ...state,
        userdata: payload,
        loading: false
      };
    case GET_USERSDATA:
      return {
        ...state,
        usersdata: payload,
        loading: false
      };
    case DELETE_USERDATA:
      return {
        ...state,
        userdata: state.userdata.filter(userdata => userdata._id !== payload),
        loading: false
      };
    case USERDATA_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_USERDATA:
      return {
        ...state,
        userdata: null,
        repos: [],
        loading: false
      };
    case CLEAR_USERSDATA:
      return {
        ...state,
        usersdata: [],
        repos: [],
        loading: false
      };
    case ADD_COMMENT:
      return {
        ...state,
        userdata: { ...state.userdata, comments: payload },
        loading: false
      };
    case ADD_COMMENTACI:
      return {
        ...state,
        userdata: { ...state.userdata, commentsaci: payload },
        loading: false
      };
    case ADD_COMMENTACII:
      return {
        ...state,
        userdata: { ...state.userdata, commentsacii: payload },
        loading: false
      };
    case ADD_COMMENTACIII:
      return {
        ...state,
        userdata: { ...state.userdata, commentsaciii: payload },
        loading: false
      };
    case ADD_COMMENTDCI:
      return {
        ...state,
        userdata: { ...state.userdata, commentsdci: payload },
        loading: false
      };
    case ADD_COMMENTDCII:
      return {
        ...state,
        userdata: { ...state.userdata, commentsdcii: payload },
        loading: false
      };
    case ADD_COMMENTDCIII:
      return {
        ...state,
        userdata: { ...state.userdata, commentsdciii: payload },
        loading: false
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        userdata: {
          ...state.userdata,
          comments: state.userdata.comments.filter(
            comment => comment._id !== payload
          )
        },
        loading: false
      };
    default:
      return state;
  }
}
