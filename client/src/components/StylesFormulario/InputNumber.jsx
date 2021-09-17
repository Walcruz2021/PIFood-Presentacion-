import React from "react"
import {Labels,LeyendaError,GrupoInp,Inpt}from "./StyleForm"

export default function InputNumber({state,changeState,type,label,name,leyendaError,placeholder}){
    console.log(state)

    const onChange2=(e)=>{
      changeState({...state,campo:e.target.value})
      
    }
    
    const validacion=()=>{
        // if(expresionRegular){
          
        //   //compara si el valor ingresado(ESTADO)cumple con las expresion regular
        //   if(expresionRegular.test(estado.campo)){
        //     //console.log("input correcto")
        //     //actualizamos la propiedad del ESTADO (valido) 
        //      cambiarEstado({...estado, valido:'true'})
        //   }else {
        //         //console.log("input incorrecto")
        //      cambiarEstado({...estado, valido:'false'})
        //   }
        // }
        console.log(state.campo)
    }
return(
    
 <div>
     <Labels htmlFor={name} valido={state.valido}>{label}</Labels>
     <GrupoInp>
 <Inpt
 id={name}
 type={type}
 label={name}
 name= {name}
 min="1"
 placeholder={placeholder}
 value={state.campo}
 onChange={onChange2} 
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