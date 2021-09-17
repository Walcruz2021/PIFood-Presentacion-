// import React from "react"

// import {useEffect,useState} from "react"
// import {useDispatch,useSelector} from "react-redux"
// import {Multiselect} from 'multiselect-react-dropdown'
// import {getDiets} from "../actions/index"
// import {postRecipes} from "../actions/index"


// export default function CreatedRecipe(){

//     const dispatch=useDispatch()
    
//     useEffect(()=>{
//         dispatch(getDiets())
//     },[])

//     const [stateN,setStateN] =useState( {
//       name:'',
//     });
//     const [stateS,setStateS] =useState( {
//       score:'',
//     });

//        const objeto1={
//         name:stateN.name,
//         summary:"sdfdf",
//         score:stateS.score,
//         healthScore:"66",
//         stepsBySteps:"fvgtredgdrt",
//         TypeDiets:["vegan"]
//       }

//   function handleChange(event) {
//     setState({
//       ...stateN, event.target.value,
//       healthScore:event.target.value
//     });
//   }

//   function handleSubmit(event) {
//     alert('An essay was submitted: ' + state.summary);
//     event.preventDefault();
//     dispatch(postRecipes(objeto1))
//   }  
//   console.log(state.summary)

//     // const onSubmit=(e)=>{


// return (

//   <form onSubmit={handleSubmit}>
  
//   <label>Write summary:<textarea value={state.summary} onChange={handleChange}/></label>

//   <label>healthscore<input type="text" value={state.healthScore} onChange={handleChange}/></label>
//   <input type="submit" value="Submit" />
// </form>

// )
// }
