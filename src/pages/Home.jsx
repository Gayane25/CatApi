import React,{useEffect, useState} from 'react'
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import {getDataAsync} from "../redux/getDataAsync"
import CatPicture from '../components/CatPicture';
import {ContainerStyled} from "../components/ContainerStyled";
import {VOID_DATA} from "../redux/dataReducer"
function Home() {
const dispatch =useDispatch();
const [page, setPage] =useState(1)
const data = useSelector(state=>state.data);
console.log(data)
useEffect(()=>{
    dispatch(getDataAsync(page))

    return ()=> dispatch({type:VOID_DATA})
},[dispatch,page])
  return (
    <>
        <Header/>
    <ContainerStyled>
        {
          data.map(catImg=><CatPicture key ={catImg.id} catImg={catImg} />)  
        }
    </ContainerStyled>
    <button onClick={()=>setPage(page+1)}>Show More</button>
    </>
  )
}

export default Home