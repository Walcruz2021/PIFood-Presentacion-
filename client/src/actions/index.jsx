import axios from "axios"


/////////////////////////////////LIST OF RECIPES*///////////////////////////////
export  function getRecipe(){
return async function(dispatch){
  const listadoRecipe=await axios.get("http://localhost:3001/recipeAll",{
 
})
//console.log(listadoRecipe)  
//Object { data: (13) […], status: 200, statusText: "OK", headers: {…}, config: {…}, request: XMLHttpRequest } 
  
    return dispatch({
        type:"GET_RECIPE",
        // payload:listadoRecipe.data
        payload:listadoRecipe.data
      })  
}
}

//////////////////////////////////GET RECIPES X NAME/////////////////////////////

export function getRecixName(name){
  return async function(dispatch){
    try{
      const recipeXname=await axios.get("http://localhost:3001/recipeAll?name="+name)
      return dispatch ({
      type:"GET_RECIxNAME",
      payload:recipeXname.data      
      })
    }catch(error){
      console.log(error)
    }
  
  }
}

//////////////////////////////////CREATED RECIPES//////////////////////////////////

export function postRecipes(payload){
  console.log(payload)
  return async function(dispatch){
    try{
      var newRecipe=await axios.post("http://localhost:3001/Addrecipe",payload)
    // return newRecipe({
    //   type:"POST_RECIPES"
    // })
    return newRecipe
    } catch(error){
    console.log(error)
    }  
  }
}

/////////////////////////////////FILTERED CREATED////////////////////////////////////////

 export  function filterCreated(payload){
   return {
     type:"FILTER_CREATED",
     payload
   }
 } 

 export  function filterTypesDiets(payload){
  return {
    type:"FILTER_TDIETS",
    payload
  }
 }
 export function getDetailsRec(payload){
  //console.log(payload)
   return  async function(dispatch) {
    
     try{
       const detailsAll=await axios.get("http://localhost:3001/"+payload)
       console.log(detailsAll) 
       return dispatch({
         type:"GET_DETAILS_REC",
         payload:detailsAll.data
       })
      }catch(error){
       console.log(error)
      }
    }
  }

  export function OrderXRating(payload){
    return {
      type:"ORDER_X_RATING",
      payload
    }
  }

 export function ascYdesc(payload){
   return{
     type:"ASC_Y_DESC",
     payload
   }
 }


 export function getDiets(){
  return async function(dispatch){
  const types=await axios.get("http://localhost:3001/typeDiets",{
  })
  console.log(types.data)
  return{
    type:"GETDIETS",
    payload:types.data
  } 
  }
 }