const ApireturnRec=function (recipes){
    return recipes.map(recipe=>{
        return {
                id: recipe.id,
                name: recipe.title,
                image: recipe.image,
                summary: recipe.summary.replace(/<[^>]*>?/gm, ''),
                score: recipe.spoonacularScore,
                health_Score: recipe.healthScore,
                stepsBySteps: stepsFunction(recipe),
                TypeDiets: recipe.diets.map(diet=>{
                     return diet
                }),
                dishTypes: recipe.dishTypes.map(dT=>{
                     return  dT
                })
        }
    })
    }
    
    const stepsFunction = function(recipe) {
        if(recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0) {
            let steps = recipe.analyzedInstructions[0].steps
            return steps.map(step => step.step);
        };
    }
    
    
    const DBreturnRec=function (recipes){
        return recipes.map(recipe=>{
            return {
                    id: recipe.id,
                    name: recipe.name,
                    image: recipe.image,
                    summary: recipe.summary,
                    score: recipe.score,
                    health_Score: recipe.healthScore,
                    stepsBySteps: recipe.stepsBySteps,
                    TypeDiets: recipe.TypeDiets.map(type=>{
                        return type.name
                    }),
                    dishTypes:recipe.dishTypes,
                    createinDB:recipe.createinDB
                   
            }
        })
    }
    
    module.exports={
        ApireturnRec,
        DBreturnRec
    }