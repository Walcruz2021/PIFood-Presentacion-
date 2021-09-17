import React from "react"
import {Labels,LeyendaError,GrupoInp,Inpt}from "./StyleForm"

export default function Input({state,changeState,type,label,name,placeholder,leyendaError,expresionRegular}){
console.log(state)
    const onChange=(e)=>{
      changeState({...state,campo:e.target.value})
    }

    const validacion=()=>{
        if(expresionRegular){
            if(expresionRegular.test(state.campo)){
                changeState({...state,valido:"true"})
            }else{
                changeState({...state,valido:"false"})
            }
        }
    }

return(
    
 <div>
     <Labels htmlFor={name} valido={state.valido}>{label}</Labels>
     <GrupoInp>
 <Inpt
 type={type}
 id={name}
 name= {name}
 placeholder={placeholder}
 value={state.campo}
 onChange={onChange} 
//cuando precionas una tecla se la presiona hacia adentro y cuando se 
        //levanta el dedo es donde se ejecuta esta funcion   
        onKeyUp={validacion}
        //cuando se hace click fuiera del input
        onBlur={validacion}
        valido={state.valido}

/>
 </GrupoInp>
         {/* enviara como props VALIDO que puede ser true o false */}
         {/* dependiendo del valor se mostrara o no el mensaje */}
         {/* las condiciones estan detalladas en el componente de estilos */}
         <LeyendaError valido={state.valido}>{leyendaError}</LeyendaError>
 </div>
)

}