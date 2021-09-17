const { Router } = require('express');
const axios=require('axios')
const {v4:uuidv4}= require ('uuid');
const {Recipe,TypeDiet}=require('../db')
const exp=require('express');
const validate=require('uuid-validate')
const { ApireturnRec, DBreturnRec } = require('../function/FormReturnxID/Api-DBreturnRec');

//nueva apikey=606b82fa15064bd7af21793d2e079d79

var apiKey=`606b82fa15064bd7af21793d2e079d79`
const router = Router();
//http://localhost:3001/recipeAll?name=Berry Banana Breakfast Smoothie este get me trae por nombre
//http://localhost:3001/recipeAll
router.get('/recipeAll',async(req,res)=>{

const name=req.query.name 
let recipeTotal=await getAllRecipe();

if(name){
  let recipeName=await recipeTotal.filter(e=>e.name.toLowerCase().includes(name.toLowerCase()))
  recipeName.length ?
    res.status(200).send(recipeName):
    //res.status(200).send(objeto)
    res.status(200).send("no hay recipes")  
}else res.status(200).send(recipeTotal)

})

//const recipes=await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100&addRecipeInformation=true`)
const getRecipeApi=async()=>{
const recipes=await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100&addRecipeInformation=true`)
const recipesRes=await recipes.data.results.map(e=>{
    return{
         id:e.id,
         name:e.title,
         image:e.image,
         score: e.spoonacularScore,
         health_Score: e.healthScore,
         TypeDiets:e.diets.map(diet=>{
             return diet
         }),
         vegetarian:e.vegetarian,
         vegan:e.vegan,
         glutenFree:e.glutenFree,
         summary:e.summary,
         stepsBySteps:e.analyzedInstructions.map(e=>{
            //return e.steps
            return e.steps.map(st=>{
                  return {
                    step:st.step
                  }
            })
            
         }), 
        //  dishTypes:dishTypes.map(dT=>{
        //    return dT
        //  })      
    }
})
 return recipesRes
}

const getRecipeBD=async()=>{
//FINDALL Busca todas las instancias que coinciden con los criterios de búsqueda. 
//Si no se proporciona ningún criterio, devuelve todas las instancias de la tabla.
 const ejemplo=await Recipe.findAll({ 
    include:{
       model:TypeDiet,
       attributes:['name'],
       thought:{
           attributes:[],
       }
    }
 })
 return ejemplo.map(recipe=>{
  return {
          id: recipe.id,
          name: recipe.name,
          image: recipe.image,
          summary: recipe.summary,
          score: recipe.score,
          health_Score: recipe.healthScore,
          stepsBySteps: recipe.stepsBySteps,
          // stepsBySteps: recipe.stepsBySteps.map(step=>{
          //   return step
          // }),
          TypeDiets: recipe.TypeDiets.map(type=>{
              return type.name
          }),

          // dishTypes: recipe.dishTypes,
          createinDB:recipe.createinDB
         
  }
})
}


const getAllRecipe=async()=>{
  
    const recipeApi=await getRecipeApi()
    const recipeBD=await getRecipeBD()
    const AllRecipe=recipeApi.concat(recipeBD)
    return AllRecipe
}

////////////////////////////TYPES DIETS////////////////////////

router.get('/typeDiets',async(req,res)=>{
        
//  const allDiets=await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true`)
//  let listaNueva=[]
//  const listaDiets=await allDiets.data.results.map(e=>{
//     listaNueva=listaNueva.concat(e.diets)
//  })
 
//  const listaSinRep=listaNueva.filter((valor,indice) =>{
//    return listaNueva.indexOf(valor)===indice;
//  })

// // var array=["vegetariano", "carnivoro","etc"] 
// //  listaSinRep.push("vegetarian")
// // console.log(listaSinRep)
 
const arrayTypeD=[
  'gluten free',
  'dairy free',
  'lacto ovo vegetarian',
  'vegan',
  'primal', 
  'paleolithic',
  'fodmap friendly',
  'pescatarian',
  'whole 30',
  
]

arrayTypeD.forEach(el=>{
    // TypeDiet.create({
    //   name:el
    // })
    TypeDiet.findOrCreate({
        where:{name:el}
    })
 })
 res.status(200).send(arrayTypeD)
})

//http://localhost:3001/715392
//http://localhost:3001/716426
//http://localhost:3001/d74eecd7-eb65-4c82-96ca-8244358ffb07
router.get('/:id',async(req,res)=>{
  
  const {id}=req.params
  //const id=715392
  try{
    //si es id de una recipe creada x mi 
    if(validate(id)){
    var recipeDB=await Recipe.findByPk(id,{
      include:TypeDiet
    })
    }
    if(recipeDB) return res.send(DBreturnRec([recipeDB]));
    
    //recipe de la api
    var reci=await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
    if(reci.data){
    return res.send(ApireturnRec([reci.data]))
    }else res.status(404).send("error")
    
  }catch(error){
  res.sendStatus(404)
  }
  
  })

///////////////////////////////POST////////////////////
router.post('/Addrecipe',async(req,res)=>{
let{
  name,
  image,
  summary,
  score,
  healthScore,
  stepsBySteps,
  TypeDiets,
  createinDB
}=req.body

let recipeCreated=await Recipe.create({
  id:uuidv4(),
  name,
  image,
  summary,
  score,
  healthScore,
  stepsBySteps,
  createinDB
})

let typesD=await TypeDiet.findAll({
  where:{name:TypeDiets}
})
console.log(typesD)
recipeCreated.addTypeDiets(typesD)
res.send("recipes created")
})

module.exports = router;
