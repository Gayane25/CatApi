import { getCategories } from "./categoriesReducer";
export function getCategoriesAsync() {
  return async (dispatch) => {
    await fetch("https://api.thecatapi.com/v1/categories ")
      .then((res) => res.json())
      .then((json) => dispatch(getCategories(json)));
  };
}
