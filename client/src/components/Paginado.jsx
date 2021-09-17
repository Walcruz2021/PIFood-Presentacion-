
import React from "react"
import Pagina from "./StylesGral/Paginacion.css"

export default function Paginado({recipePerPag,recipes,paginado}){
const pagesNumbers=[]

for(let i=0;i<Math.ceil(recipes/recipePerPag);i++){
pagesNumbers.push(i+1)
}

return(
    
<nav>
    <div class="center">
    <ul class="pagination">
     
        {
        pagesNumbers&&pagesNumbers.map(number=>(
            <li key={number}>
              <a onClick={()=>paginado(number)}>{number}</a>
            </li>
        ))
    }</ul>
    </div>
</nav>

)
}