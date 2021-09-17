import React from "react"
import {Labels,LeyendaError,GrupoInp}from "./StyleForm"

export default function Textarea({state2,changeState2,label,name,rows,cols,leyendaError,expresionRegular}){
 
    console.log(state2)
    const onChange=(e)=>{
      changeState2({...state2,campo:e.target.value})
    }

    const validacion=()=>{
        if(expresionRegular){
            if(expresionRegular.test(state2.campo)){
                changeState2({...state2,valido:"true"})
            }else{
                changeState2({...state2,valido:"false"})
            }
        }
    }

return(
    
 <div>
     <Labels htmlFor={name} valido={state2.valido}>{label}</Labels>

<GrupoInp> 
 
<textarea
 id={name}
 name={name}
 value={state2.campo}
 rows={rows}
 cols={cols}
 onChange={onChange} 
//cuando precionas una tecla se la presiona hacia adentro y cuando se 
//levanta el dedo es donde se ejecuta esta funcion   
 onKeyUp={validacion}
//cuando se hace click fuiera del input
 onBlur={validacion}
 valido={state2.valido}

/>
 </GrupoInp>
         {/* enviara como props VALIDO que puede ser true o false */}
         {/* dependiendo del valor se mostrara o no el mensaje */}
         {/* las condiciones estan detalladas en el componente de estilos */}
         <LeyendaError valido={state2.valido}>{leyendaError}</LeyendaError>
 </div>
)

}