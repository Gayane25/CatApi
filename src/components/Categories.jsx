import React, { useEffect } from "react";
import { Wrapper, CatStyled, StyledLinks } from "./CategoriesStyled";
import { getCategoriesAsync } from "../redux/categoriesAsync";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { OPEN_CATEGORIES } from "../redux/toggleModalReducer";
import { VOID_STATE } from "../redux/categoriesReducer";
import { VOID_DATA } from "../redux/dataReducer";

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategoriesAsync());
    return;
  }, []);

  return (
    <Wrapper
      onClick={(e) => {
        e.stopPropagation();
        dispatch({ type: OPEN_CATEGORIES });
        dispatch({ type: VOID_STATE });
      }}
    >
      <CatStyled>
        <StyledLinks>
          {categories.map((categorie) => (
            <Link
              style={{
                textDecoration: "none",
                color: "#000",
                fontSize: "21px",
                cursor: "pointer",
                padding: "5px",
                borderBottom: "1px solid black",
              }}
              onClick={() => {
                dispatch({ type: OPEN_CATEGORIES });
                dispatch({ type: VOID_STATE });
                dispatch({ type: VOID_DATA });
              }}
              key={categorie.id + Math.random()}
              to={`/${categorie.name}`}
            >
              {categorie.name}
            </Link>
          ))}
        </StyledLinks>
      </CatStyled>
    </Wrapper>
  );
}

export default Categories;
