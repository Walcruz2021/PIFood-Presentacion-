import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipe,
  filterCreated,
  ascYdesc,
  filterTypesDiets,
  OrderXRating,
} from "../actions";

import { Paginado } from "./StylesGral/cssPaginado";
import { useHistory } from "react-router-dom";
import Card from "./Card";
import { Link } from "react-router-dom";
import Search from "./Search.jsx";
import Hom from "./StylesGral/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

const itemPerPag = 9;
export default function Home() {
  const dispatch = useDispatch();
  var history = useHistory();

  //importamos el state del REDUCER
  const recipes = useSelector((state) => state.allRecipe);
  console.log(recipes);
  //Array(13) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]

  //////////////////////2 PAGINADO////////////////////////
  const recipesPerPag = 9;
  const cantPaginas = Math.ceil(recipes.length / recipesPerPag);
  //console.log(limite)
  const [currentPage, setCurrentPage] = useState(0);
  const [pagAct, setPagAct] = useState(1);
  const getFilter = () => {
    return recipes.slice(currentPage, currentPage + recipesPerPag);
  };

  const handlePrev = () => {
    if (pagAct > 1) {
      setCurrentPage(currentPage - recipesPerPag);
      setPagAct(pagAct - 1);
    }
  };

  const handleNext = () => {
    if (pagAct >= 1 && pagAct < cantPaginas) {
      setCurrentPage(currentPage + recipesPerPag);
      setPagAct(pagAct + 1);
    }
  };

  /////////////////////////////1 PAGINADO//////////////////////////////////////////
  //current=actual
  //XXconst [currentPage, setCurrentPage] = useState(1);
  //console.log(currentPage)
  //const [currentPage,setCurrentPage]=useState(1)
  //cantidad de recetas por pagina segun README
  //XXconst [recipePerPag, setRecipePerPag] = useState(9);
  //Ade,as necesito tener indices del primer recipe y del ultimo
  //XXconst indexLastRec = currentPage * recipePerPag;
  //XXconst indexPrimerRecipe = indexLastRec - recipePerPag;

  //XX var currentRecipes;
  //XX if (recipes.length) {
  //XX   currentRecipes = recipes.slice(indexPrimerRecipe, indexLastRec);
  //XX }
  //const currentRecipes=recipes.slice(indexPrimerRecipe,indexLastRec)

  //XXconsole.log(currentRecipes);
  //Array(9) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…} ]
  //en la primera impresion me tirara los primeros 9 recipes

  //inicialmente seteara currentPage en 1 (listia iria de 1 a 9 videogames), luego
  //2 (listia iria de 10 a 19 videogames),etc etc ya que al setear el currentpage
  //con ese valor es que se calcula el index del ULTIMO RECIPE, y gracias
  //al ultimo es que se calcular el indice del PRIMER RECIPE

  //se invoca al componente PAGINADO (abajo) se le pasa cxomo argumento la funcion
  //"paginado" y otras dos props mas
  //el valor del argumento de la funciON "paginado" (pageNumber) viene
  //de componente PAGINADO
  //es decir primero pagenumber=1, luego pagenumber=2 , etc etc
  // XXconst paginado = (pagenumber) => {
  // XX  setCurrentPage(pagenumber);
  // };

  useEffect(() => {
    dispatch(getRecipe());
  }, [dispatch]);

  //////////////////////////////FILTER CREATED//////////////////////////////////////

  function onSelect(e) {
    dispatch(filterCreated(e.target.value));
  }

  /////////////////////////////ORDER ASC Y DESC///////////////////////////////////

  //estado que contendra la orden elegida
  const [orden, setOrden] = useState("");
  console.log(orden);

  function OrderAyD(e) {
    e.preventDefault();
    dispatch(ascYdesc(e.target.value));
    //luego de hacer el ordenamiento se le solicita que se setee la pagina 1
    setCurrentPage(1);
    //una vez que se setee el estado local se modificara y se
    //renderizara:Este estado local arranca vacio y luego se lo
    //setea ordenado
    setOrden(`Ordenado ${e.target.value}`);
  }

  /////////////////////////////ORDER X RATING///////////////////////////////////

  function onSelect3(e) {
    dispatch(OrderXRating(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  ///////////////////////FILTERED X TYPES OF DIETS///////////////////////////

  useEffect(() => {
    dispatch(filterTypesDiets());
  }, [dispatch]);

  const Tdiets = useSelector((state) => state.typeDiets);

  const arrayTypeD = [
    "gluten free",
    "dairy free",
    "lacto ovo vegetarian",
    "vegan",
    "primal",
    "paleolithic",
    "fodmap friendly",
    "pescatarian",
    "whole 30",
  ];

  function onSelect2(e) {
    dispatch(filterTypesDiets(e.target.value));
  }
  var aux = "NO EXISTEN RECIPES";

  ///////////////////////CARGA DE NUEVO TDOS LAS RECIPES///////////////////////////

  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipe()); //resetea
  }

  return (
    <div>
      <div class="barra">
        <div class="contenedor">
          <div class="logo">
            <h4>Welcome to Recipes</h4>
          </div>
          
          <div class="menu-movil">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav class="navegacion-principal">
            <a>
              <Search />
            </a>
            <a>
              <Link to="/newRecipe" class="nav-link active">
                Create Recipes
              </Link>
            </a>
          </nav>
        </div>
      </div>

      {/* /////////////////////////////SELECT/////////////////////////////////// */}

      <div class="selectbox container">
        <select class="select" onChange={(e) => OrderAyD(e)}>
          <option class="lista-select" value="asc">
            ascendente
          </option>
          <option class="lista-select" value="desc">
            descendente
          </option>
        </select>

        <Paginado>
            <FontAwesomeIcon
              onClick={() => handlePrev()}
              icon={faAngleDoubleLeft}
              size="lg"
              style={{ cursor: "pointer" }}
            ></FontAwesomeIcon>
            {/* <button class="btnPag"  id="1"  onClick={handlePrev}><i class="fal fa-chevron-double-right"></i></button>  */}
            <span> </span>
            <span>
              {pagAct} de {cantPaginas}
            </span>
            {/* <button class="btnPag" onClick={handleNext}>next</button> */}
            <span> </span>
            <FontAwesomeIcon
              onClick={() => handleNext()}
              icon={faAngleDoubleRight}
              size="lg"
              style={{ cursor: "pointer" }}
            ></FontAwesomeIcon>
          </Paginado>

        <select class="select" onChange={(e) => onSelect3(e)}>
          <option class="lista-select" value="ascXrating">
            ascxRating
          </option>
          <option class="lista-select" value="descXrating">
            descxRating
          </option>
        </select>
      </div>

      <div class="container d-flex justify-content-center">
        {/*cards centradas*/}
        <div class="row">
          <h2 class="title">LIST OF RECIPES</h2>
          {Array.isArray(getFilter()) ? (
            getFilter().map((e) => {
              return (
                <div className="col-md-4">
                  <Card
                    id={e.id}
                    name={e.name}
                    key={e.id}
                    image={e.image}
                    score={e.score}
                    TypeDiets={e.TypeDiets}
                  />
                </div>
              );
            })
          ) : (
            <h1 class="notSearch">{aux}</h1>
          )}
        </div>
      </div>

      {/* <Paginado currentPage={currentPage} items1={items1} nextHandler={nextHandler} prevHandler={prevHandler}/> */}
      {/* XX<Paginado
        recipePerPag={recipePerPag}
        recipes={recipes.length}
        paginado={paginado}
      /> */}
      {/* XX<span class="migaja">{currentPage}</span> */}
    </div> //fin del primer div
  );
}

// <div>
//   <nav class="navbar navbar-expand-lg navbar-light bg-light">
//     <a class="navbar-brand">Welcome to Recipes</a>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <Link to="/newRecipe" class="nav-link active">
//             Create Recipes
//           </Link>
//         </li>
//         <li class="nav-item">
//           <button
//             class="button3"
//             onclick={(e) => {
//               handleClick(e);
//             }}
//           >
//             Update Recipes
//           </button>
//         </li>
//         {/* <select class="select" onChange={(e)=>onSelect(e)}>
//         <option value="all">Todos</option>
//         <option value="api">API</option>
//         <option value="created">CREATED</option>
//         </select> */}
//         <li class="nav-item dropdown">
//           <select class="dropdown-menu" onChange={(e) => onSelect2(e)}>
//             <option value="">ALL</option>
//             {arrayTypeD.map((e) => (
//               <option class="dropdown-item" value={e}>
//                 {e}
//               </option>
//             ))}
//           </select>
//         </li>
//       </ul>
//       <Search />
//     </div>
//   </nav>
