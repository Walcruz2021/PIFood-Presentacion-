

const initialState={
    allRecipe:[],
    copyAllrecipe:[],
    details:[],
    typeDiets:[] 
}

function rootReducer(state=initialState,action){
console.log(action.payload)
//imprmiira esto de abajao,dependiendo de la accion que se haya elegido
//Object { type: "GET_RECIPE", payload: (13) […] }
 switch(action.type){
    case "GET_RECIPE":
    return {
        ...state,
        allRecipe:action.payload,
        copyAllrecipe:action.payload
    } 

    case "GET_RECIxNAME":
        console.log(action.payload)
        
        return {
            ...state,
            allRecipe:action.payload
        }

    case "POST_RECIPES":
            return {
              ...state,
            }

    case "FILTER_CREATED":
        const listFiltered=action.payload==="created"?state.copyAllrecipe.filter(e=>e.createinDB):state.copyAllrecipe.filter(e=>!e.createinDB)
            return{
              ...state,
             allRecipe:action.payload==="all" ? state.allRecipe:listFiltered 
            }   
     // si action payload es igual a "all" se concatenara al stat allRecipe
     // si NO es igual entonces se concatenara listFiltered(created or api)
          
    //  [
    //     {
    //       "id": 592479,
    //       "name": "Kale and Quinoa Salad with Black Beans",
    //       "image": "https://spoonacular.com/recipeImages/592479-312x231.jpg",
    //       "typeDiets": [
    //         "gluten free",
    //         "dairy free",
    //         "lacto ovo vegetarian",
    //         "vegan"
    //       ],
    //       "vegetarian": true,
    //       "vegan": true,
    //       "glutenFree": true,
    //"summary":sdfgsdfsd,
    //"stepsBysteps":fdsfdsf
    //    }
    //]     
    case "FILTER_TDIETS":
        console.log(state.copyAllrecipe)
        const listXDiets=state.copyAllrecipe.filter(td=>td.TypeDiets.filter(e=>e==action.payload)==action.payload)
        console.log(listXDiets)
        return {
            ...state,
            allRecipe:action.payload==="TODOS" ? state.copyAllrecipe:listXDiets 
        }

    case "GET_DETAILS_REC":
       return {
         ...state,
         details:action.payload
     
        }


    case "ASC_Y_DESC":
        let sortedArr=action.payload==="asc"?
        state.allRecipe.sort(function(a,b){
            if(a.name.toUpperCase()>b.name.toUpperCase()){
                return 1
            }else if (b.name.toUpperCase()>a.name.toUpperCase()){
                return -1
            }
            return 0
        }):
        //descendente
        state.allRecipe.sort(function(a,b){
            if(a.name.toUpperCase()>b.name.toUpperCase()){
                return -1
            }
            if(b.name.toUpperCase()>a.name.toUpperCase()){
                return 1
            } 
            return 0
        })

        return{
            ...state,
            allRecipe:sortedArr
        }
    case "ORDER_X_RATING":
        let sortedRating=action.payload==="ascXrating"?
        state.allRecipe.sort(function(a,b){
            const aux1=parseFloat(a.score)
            const aux2=parseFloat(b.score)
            if(aux1>aux2){
                return 1
            } 
            if(aux2>aux1) {
                return -1
            }
            else return 0
        }):
        //descendente
        state.allRecipe.sort(function(a,b){
        const aux1a=parseFloat(a.score)
        const aux2b=parseFloat(b.score)
            if(aux1a>aux2b){return -1}
            if(aux2b>aux1a){return 1}
            else return 0
        })

        return {
            ...state,
            allRecipe:sortedRating
        }

    case "GETDIETS":
       console.log(action.payload) 
       return{
        ...state,
        typeDiets:action.payload
       }
       
        default:
        return state
      
 }

}

export default rootReducer