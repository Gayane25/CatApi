import React,{useEffect, useState} from 'react'
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import {getDataAsync} from "../redux/getDataAsync"
import CatPicture from '../components/CatPicture';
import {ContainerStyled} from "../components/ContainerStyled";
import {VOID_DATA} from "../redux/dataReducer"
import Button from "../components/Button"
function Home() {
const dispatch =useDispatch();
const [page, setPage] =useState(1)
const data = useSelector(state=>state.data);
console.log(data)
useEffect(()=>{
    dispatch(getDataAsync(page))

      // dispatch({type:VOID_DATA})
},[dispatch,page])
// const handleChangePage=()=>{
//   setPage(page=>page+1);
//   dispatch(getDataAsync(page))
// }
  return (
    <>
        <Header/>
    <ContainerStyled>
        {
          data.map(catImg=><CatPicture key ={catImg.id} catImg={catImg} />)  
        }
    </ContainerStyled>
   <button onClick={()=>setPage(page+1)}>Show</button>
    </>
  )
}

export default Home