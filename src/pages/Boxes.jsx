import React, {useEffect} from 'react'
import Header from '../components/Header'
import {useDispatch, useSelector} from "react-redux";
import {getDatabyCategoriesAsync} from "../redux/getDatabyCategoriesAsync";
import {catwithId} from "../categorieswithId";

function Boxes() {
    const dispatch = useDispatch();
    const page = useSelector(state=>state.page);
    useEffect(()=>{
        dispatch(getDatabyCategoriesAsync(page, catwithId.boxes))
    },[])
  return (
    <div>
        <Header/>
    </div>
  )
}

export default Boxes