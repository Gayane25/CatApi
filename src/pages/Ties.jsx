import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import {useDispatch, useSelector} from "react-redux";
import {getDatabyCategoriesAsync} from "../redux/getDatabyCategoriesAsync";
import {catwithId} from "../categorieswithId";
import {VOID_DATA} from "../redux/dataReducer"
import { ContainerStyled } from '../components/ContainerStyled';
import CatPicture from '../components/CatPicture';
function Ties() {
  const dispatch = useDispatch();
  const [page,setPage] = useState(1);
  const data = useSelector(state=>state.data)
    useEffect(()=>{
        dispatch(getDatabyCategoriesAsync(page, catwithId.ties))
        return ()=>dispatch({type:VOID_DATA})
    },[page])
  return (
    <>
        <Header/>
        <ContainerStyled>
        {data.map(catImg=><CatPicture key={catImg.id+Math.random()}catImg={catImg}/>)}
        </ContainerStyled>
    </>
  )
}

export default Ties