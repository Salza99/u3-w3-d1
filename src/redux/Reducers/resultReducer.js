import { GET_SEARCH } from "../actions";

const initialState = {
  content: [],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    default:
      return state;
  }
};
export default resultReducer;
