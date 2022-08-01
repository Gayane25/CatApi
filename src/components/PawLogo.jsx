import React from 'react';
import logo from "../assets/paw.png";
import {useDispatch, useSelector} from "react-redux";
import {OPEN_CATEGORIES} from "../redux/toggleModalReducer"
import Categories from './Categories';

function PawLogo() {
    const dispatch = useDispatch();
    const isOpen = useSelector(state=>state.modal.isOpen)
    const somefunc=()=>{
        dispatch({type:OPEN_CATEGORIES})
        console.log("first")
    }
  return (
    <>
    <div style={{width: 50+"px",
        paddingLeft: 100+"px",
        paddingTop: 10+"px"}}>
      <span onClick={somefunc}><img src={logo} alt="paw-logo" style={{width:100 +"%"}}/></span>
    </div>
    {isOpen && <Categories/>}
    </>

  )
}

export default PawLogo