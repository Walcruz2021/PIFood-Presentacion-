import React from "react"
import Cardis from "./StylesGral/Card.css"
export default function Card({name,image,score,TypeDiets}){

return(
    <div class="cardita">
        <h4>{name}</h4>
        <img src={image} alt="imagen no found" width="180px" heith="200px"/>
        <h4>Score: {score}</h4>
        {TypeDiets?TypeDiets.map(e=><li>{e}</li>):<p>no tiene TP asociado</p>}
        {/* {typeDiets.map(e=><li>{e}</li>)} */}
    </div>
)

}