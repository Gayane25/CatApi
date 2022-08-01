import React, {useEffect} from 'react';
import { Wrapper, CatStyled } from './CategoriesStyled';
import {getCategoriesAsync} from "../redux/categoriesAsync";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom"
import {OPEN_CATEGORIES} from "../redux/toggleModalReducer";
import {VOID_STATE} from "../redux/categoriesReducer"

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(state=>state.categories)
  useEffect(()=>{
    dispatch(getCategoriesAsync())
    return 
  },[]);
  
  return (
    <Wrapper>
      <CatStyled>
        <div>
    {categories.map(categorie=><Link onClick={()=>{dispatch({type:OPEN_CATEGORIES}); dispatch({type:VOID_STATE})}} key={categorie.id+Math.random()} to={`/${categorie.name}`}>{categorie.name}</Link>)}
    </div>
      </CatStyled>
    </Wrapper>
  )
}

export default Categories