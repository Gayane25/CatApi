import React,{useEffect} from 'react'
import Header from '../components/Header'
import {useDispatch, useSelector} from "react-redux";
import {getDatabyCategoriesAsync} from "../redux/getDatabyCategoriesAsync";
import {catwithId} from "../categorieswithId";
function Hats() {
  const dispatch = useDispatch();
    const page = useSelector(state=>state.page)
    useEffect(()=>{
        dispatch(getDatabyCategoriesAsync(page, catwithId.hats))
    },[page])
  return (
    <div>
        <Header/>
    </div>
  )
}

export default Hats