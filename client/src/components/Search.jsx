import React from 'react'
import {getRecixName} from '../actions'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import SearchCss from "./StylesGral/Search.css"
export default function Search(props){
    
const dispatch=useDispatch();
let [buscado,setBuscado]=useState();

function onChangeInput(e){
    e.preventDefault();
    setBuscado(e.target.value)
}

function handleSubmit(e){
   e.preventDefault();
   dispatch(getRecixName(buscado))
   setBuscado("")
}

return (
    <div class="searchEst">
      <input class="inputSearch"
      type="search"
      name="search"
      placeholder="enter value to search"
      value={buscado}
      onChange={(e)=>onChangeInput(e)}    
      />
      <button class="buttonSearch" 
      type="onSubmit" 
      onClick={(e)=>handleSubmit(e)}
      >Search Recipe
      </button>
    </div> 
)
}