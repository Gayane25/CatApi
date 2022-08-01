import { getData } from "./dataReducer";
export function getDatabyCategoriesAsync(page, catid) {
  return async (dispatch) => {
    await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${catid}`
    )
      .then((res) => res.json())
      .then((json) => dispatch(getData(json)));
  };
}
