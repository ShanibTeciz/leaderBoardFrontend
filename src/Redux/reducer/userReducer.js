import {
  ADD_USER,
  DELETE_USER,
  FETCH_USERS,
  UPDATE_USER,
} from "../constants/constants";

const initialState = {
  entities: [],
};
const userReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        entities: payload.data,
      };
    case ADD_USER:
      return {
        ...state,
        entities: [...state.entities, payload.data],
      };
    case UPDATE_USER:
      const filteredUser = state.entities.filter(
        ({ _id }) => payload.data._id !== _id
      );
    
      return {
        ...state,
        entities: [...filteredUser, payload.data],
      };
    case DELETE_USER:
      const _state = state.entities.filter(({ _id }) => payload.userId !== _id);
      return {
        ...state,
        entities: _state,
      };
    default:
      return state;
  }
};
export default userReducer;
