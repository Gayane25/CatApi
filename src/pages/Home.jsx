import React,{useEffect} from 'react'
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { CHANGE_PAGE} from "../redux/pageReducer" ;
import {getDataAsync} from "../redux/getDataAsync"
import CatPicture from '../components/CatPicture';
function Home() {
const dispatch =useDispatch();
const page = useSelector(state=>state.page);
const data = useSelector(state=>state.data);
console.log(data)
useEffect(()=>{
    dispatch(getDataAsync(page))
},[dispatch,page])
  return (
    <div>
        <Header/>
    <div>
        {
          data.map(catImg=><CatPicture key ={catImg.id} catImg={catImg} />)  
        }
    </div>
    <button onClick={()=>dispatch({type:CHANGE_PAGE})}>Show More</button>
    </div>
  )
}

export default Home