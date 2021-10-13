// import React from "react";
// import { postRecipes } from "../actions";
// import Pagina from "./StylesGral/Paginacion.css";
// import Card from "./Card";

// export default function Paginado(props) {
//   console.log(props);
//   return (
//     <div>
//         <button onClick={props.prevHandler}>prev</button>
//         <button onClick={props.nextHandler}>next</button>
//     </div>
//   );
// }

// // export default function Paginado(props){
// // const items2=props.items1.map((item,index)=>{
// //     return <li key={item.id}><div className="col-md-4"><Card id={item.id}
// //     name={item.name}
// //     key={item.id}
// //     image={item.image}
// //     score={item.score}
// //     TypeDiets={item.TypeDiets}/></div></li>
// // })

// // console.log(items2)
// // return(
// //     <div>
// //         <h5>pagina:{props.currentPage}</h5>
// // <button onClick={props.prevHandler}>prev</button>
// // <button onClick={props.nextHandler}>next</button>

// // <h5>item</h5>
// //     <ul>
// //         {items2}
// //     </ul>

// // </div>
// // )
// // }

// // import React from "react"
// // import Pagina from "./StylesGral/Paginacion.css"

// // export default function Paginado({recipePerPag,recipes,paginado}){
// // const pagesNumbers=[]

// // for(let i=0;i<Math.ceil(recipes/recipePerPag);i++){
// // pagesNumbers.push(i+1)
// // }

// // return(

// // <nav>
// //     <div class="center">
// //     <ul class="pagination">

// //         {
// //         pagesNumbers&&pagesNumbers.map(number=>(
// //             <li class="page-item" key={number}>
// //               <a onClick={()=>paginado(number)}>{number}</a>
// //             </li>
// //         ))
// //     }</ul>
// //     </div>
// // </nav>

// // )
// // }
