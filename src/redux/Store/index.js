import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../Reducers";
import favouriteReducer from "../Reducers/favouriteReducer";
import resultReducer from "../Reducers/resultReducer";

const rootReducer = combineReducers({
  favouriteCompany: favouriteReducer,
  resultSearch: resultReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
