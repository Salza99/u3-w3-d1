import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/dist";

export const SAVE_ON_FAVOURITE = "SAVE_ON_FAVOURITE";
export const REMOVE_ITEM_FROM_FAVOURITE = "REMOVE_ITEM_FROM_FAVOURITE";
export const GET_SEARCH = "GET_SEARCH";

export const saveOnFavouriteAction = (data) => {
  return { type: SAVE_ON_FAVOURITE, payload: data };
};

export const removeItemFromFavouriteAction = (i) => ({ type: REMOVE_ITEM_FROM_FAVOURITE, payload: i });

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

export const getSearchResult = (params) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_SEARCH, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
