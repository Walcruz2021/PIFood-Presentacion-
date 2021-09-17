import React from "react"
import {useDispatch,useSelector} from "react-redux"
import {useState,useEffect} from "react"
import {getDetailsRec} from "../actions/index"
import {Link} from "react-router-dom"
import details from "./StylesGral/DetailsRecipe.css"


export default function DetailsRecipe(props){
console.log(props)
//PROPS=
// history: {length: 3, action: "PUSH", location: {…}, createHref: ƒ, push: ƒ, …}
// location: {pathname: "/details/547775", search: "", hash: "", state: undefined, key: "mb6yj4"}
// match:
// isExact: true
//   params:
//      id: "547775"
// [[Prototype]]: Object
// path: "/details/:id"
// url: "/details/547775"
// [[Prototype]]: Object
// staticContext: undefined
// [[Prototype]]: Object

const dispatch=useDispatch();

//utilizo dispatch e invoco a la accioon GET_DETAILS_REC a traves del useEffect
//el mismo posteriormente se jecutara en el REDUCER el cual guardara
//toda la informacion en el state DETAILS

useEffect(()=>{
 dispatch(getDetailsRec(props.match.params.id))
},[dispatch])
console.log(props.match.params.id)


//traigo del REDUCER el state de detalles (DETAILS)
const Alldetails=useSelector((state)=>state.details)
console.log(Alldetails)

const punto="."
var auxcadena=""

function dividirCadena(cadena,separador){
  var arrayDeCadenas = cadena.split(separador);
return arrayDeCadenas
}

return(
 
  <main class="contenedor">
    <h1 class="centrar-texto">DETAILS RECIPE</h1>
    <div>
      {Alldetails.length>0?
        <div>
          <div class="grid">
            <div class="column-6">
              <img className='details-img' src={Alldetails[0].image}  width="550 rem" heith="1010 rem" alt='not found'/>
            </div>

            < div class="column-7">
              <h2 class="title2">NAME OF RECIPE:</h2>{Alldetails[0].name} 


              <p class="title2">SCORE:</p>{Alldetails[0].score?
              Alldetails[0].score:
              <span>there are no score for this recipe</span>
              }


              <p class="title2">HEALTH SCORE:</p>{Alldetails[0].health_Score?
              Alldetails[0].health_Score:
              <span>there are no health score for this recipe</span>
              }


              <p class="title2">RECIPES TYPES:</p>
              {Alldetails[0].TypeDiets && Alldetails[0].TypeDiets.length>0?
              Alldetails[0].TypeDiets.map(diets=>{
              return <span>{diets} / </span>
              }):<span>there are no types for this recipe</span>
              }


              <p class="title2">DISH TYPES:</p>
              {Alldetails[0].dishTypes && Alldetails[0].dishTypes.length>0?
              Alldetails[0].dishTypes.map(dt=>{
              return <span>{dt} / </span>
              }):<span>there are no dishtypes for this recipe</span>
              }
            </div>
          </div>

            <p class="title">SUMMARY</p>
            <p>{Alldetails[0].summary}</p>


          <p class="title">STEPS BY STEPS:</p>
          {
            Alldetails[0].createinDB?(auxcadena=dividirCadena(Alldetails[0].stepsBySteps,punto)).map((step, i) => {
             return (
               <div className='step'>
               {auxcadena.length > 1 && <span>{i + 1}. </span>}
               <span>{step}</span>
               </div>
              );
            }):

            Alldetails[0].stepsBySteps && Alldetails[0].stepsBySteps.length > 0 && 
              <div>
                {Alldetails[0].stepsBySteps.map((step, i) => {
                  return (
                    <div className='step'>
                      {Alldetails[0].stepsBySteps.length > 1 && <span>{i + 1}. </span>}
                      <span>{step}</span>
                    </div>
                  );
                })}   
            </div>
          }
        </div>
        
       :<p>Loading</p>
      }
    </div>
    <Link to="/home">
      <button class="button1">Back to Home</button>
    </Link>
    
  </main>
)
}

