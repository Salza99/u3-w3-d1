import { REMOVE_ITEM_FROM_FAVOURITE, SAVE_ON_FAVOURITE } from "../actions";

const initialState = {
  content: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ON_FAVOURITE:
      return {
        ...state,

        content: [...state.content, action.payload],
      };
    case REMOVE_ITEM_FROM_FAVOURITE:
      return {
        ...state,

        content: [
          ...state.content.filter((_, i) => {
            return action.payload !== i;
          }),
        ],
      };
    default:
      // eslint-disable-next-line no-unused-expressions
      return state;
  }
};

export default favouriteReducer;
