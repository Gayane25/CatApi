import { getData } from "./dataReducer";
export function getDataAsync(page) {
  return async (dispatch) => {
    await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}`
    )
      .then((res) => res.json())
      .then((json) => dispatch(getData(json)));
  };
}
