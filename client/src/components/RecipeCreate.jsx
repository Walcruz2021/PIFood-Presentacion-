import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../actions/index";
import validator from "validator";
import { postRecipes } from "../actions/index";
import {
  Formul,
  ContenedorBotonCentrado,
  Boton,
  Boton2,
  MensajeExito,
  MensajeError,
} from "./StylesFormulario/StyleForm";
import Input from "./StylesFormulario/Input";
import InputNumber from "./StylesFormulario/InputNumber";
import { GrupoInp } from "./StylesFormulario/StyleForm";
import Textarea from "./StylesFormulario/Textarea";
import { useHistory } from "react-router-dom";
import Create from "./StylesGral/RecipeCreate.css";
import { Link } from "react-router-dom";
import imgFormulario from "./imagenes/imgForm5.jpg"

export default function RecipeCreate() {
  const dispatch = useDispatch();
  const history = useHistory();

  ////////////////////////////////////////////////////////////////
  //traigo array de tipos de dietas
  // useEffect(()=>{
  //     dispatch(getDiets())
  // },[])
  //const listDiets=useSelector((state)=>state.typeDiets)

  const arrayTypeD = [
    { name: "gluten free" },
    { name: "dairy free" },
    { name: "lacto ovo vegetarian" },
    { name: "vegan" },
    { name: "primal" },
    { name: "paleolithic" },
    { name: "fodmap friendly" },
    { name: "pescatarian" },
    { name: "whole 30" },
  ];

  ///////////////////////////ESTADOS//////////////////////////////////////////

  const [name, setName] = useState({ campo: "", valido: null });
  const [summary, setSummary] = useState({ campo: "", valido: null });
  const [score, setScore] = useState({ campo: "", valido: null });
  const [healthScore, setHealthScore] = useState({ campo: "", valido: null });
  const [stepsBySteps, setStepsBySteps] = useState({ campo: "", valido: null });
  const [users, setUsers] = useState([]);
  const [img, setImg] = useState({
    campo: "",
  });
  console.log(img);
  console.log(users);
  const [formularioValido, cambiarFormularioValido] = useState(null);

  useEffect(() => {
    setUsers(arrayTypeD);
  }, []);

  useEffect(() => {
    dispatch(postRecipes());
  }, []);

  /////////////////////////////EXPRESIONES REGULARES/////////////////////////////////////////

  const expresiones = {
    name: /^([a-z-ÿ\s]+[0-9]{0,2}){5,12}$/, // Letras, numeros, guion y guion_bajo
    //^[a-zA-ZÀ-ÿ\s]{4,40}$ /^([a-z]+[0-9]{0,2}){5,12}
    summary: /^[a-zA-ZÀ-ÿ\s]{5,100}$/, // Letras y espacios, pueden llevar acentos.
    score: /^.{0,100}$/, // 0 a 100 digitos.
    healthScore: /^.{0,100}$/, // 0 a 100 digitos.
    stepsBySteps: /^([a-zA-ZÀ-ÿ\s.]+[0-9]{0,20}){5,200}$/, // Letras y espacios, pueden llevar acentos.
  };

  //////////////////////////////////FUNCIONES///////////////////////////////////////

  const onSubmit = (e) => {
    e.preventDefault();
    let array = [];
    let array2 = [];
    array = users.filter((el) =>
      el.isChecked && el.isChecked === "true" ? el.name : el.isChecked
    );
    array2 = array.map((e) => {
      return e.name;
    });
    console.log(array2);

    if (
      name.valido === "true" &&
      summary.valido === "true" &&
      score.campo != 0 &&
      healthScore.campo != 0 &&
      stepsBySteps.valido === "true" &&
      array2.length > 0
    ) {
      const objeto1 = {
        name: name.campo,
        image: img.campo,
        summary: summary.campo,
        score: score.campo,
        healthScore: healthScore.campo,
        stepsBySteps: stepsBySteps.campo,
        TypeDiets: array2,
      };
      console.log(objeto1);
      dispatch(postRecipes(objeto1));
      cambiarFormularioValido(true);
      alert("Recipes Created");
      history.push("/home");
    } else cambiarFormularioValido(false);
  };

  //FUNCION DE LOS CHECKBOX
  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
      console.log(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
      console.log(tempUser);
    }
  };

  const handleImageChange = (event) => {
    if (validator.isURL(event.target.value)) {
      setImg({
        ...img,
        campo: event.target.value,
      });
    }
  };

  ///////////////////////////////////////////////////////////////

  return (
    <section class="container-form">
      <section class="row justify-content-center">
        <section class="col-12 col-sm-6 col-md-7">
          {/* <div class="columnas-12">
            <img src={imgFormulario} width="590 px" height="250 px" alt="imagen-formulario" />
          </div> */}
          <Link to="/home">
            <div>
              <Boton2 type="sumit">Back to Home</Boton2>
            </div>
          </Link>
          <form action="" onSubmit={onSubmit} class="form-container">
            <h5 class="title">RECIPE CREATION FORM</h5>
            <Formul>
              <Input
                state={name}
                changeState={setName}
                type="text"
                label="(*) name"
                placeholder="write name please"
                name="name"
                leyendaError="the name should be greater than 4 digits"
                expresionRegular={expresiones.name}
              />

              <InputNumber
                state={score}
                changeState={setScore}
                type="number"
                label="(*) score"
                name="score"
                min="1"
                placeholder="write score please"
                leyendaError="the score must be between 0 and 100"
              />

              <InputNumber
                state={healthScore}
                changeState={setHealthScore}
                type="number"
                label="(*) healthscore"
                name="healthscore"
                min="1"
                placeholder="write healthscore please"
                leyendaError="the healthscore must be between 0 and 100"
                expresionRegular={expresiones.healthScore}
              />
              <GrupoInp>
                <label class="labIma">enter image</label>
                <input
                  class="inputImag"
                  type="url"
                  name="imagen"
                  placeholder="enter image"
                  onChange={handleImageChange}
                />
              </GrupoInp>
            </Formul>
            <Textarea
              state2={summary}
              changeState2={setSummary}
              label="(*) summary"
              name="summary"
              rows="5"
              cols="50"
              leyendaError="the summary should be greater than 5 digits"
              expresionRegular={expresiones.summary}
            />

            <Textarea
              state2={stepsBySteps}
              changeState2={setStepsBySteps}
              label="(*) stepsBySteps"
              name="steps"
              rows="5"
              cols="50"
              leyendaError="the summary should be greater than 5 digits"
              expresionRegular={expresiones.stepsBySteps}
            />

            <br></br>
            <label class="labSelect">(*) Select Types Diets</label>
            <br></br>
            <Formul>
              <div>
                <input
                  type="checkbox"
                  name="allSelect"
                  // checked={
                  //   users.filter((user) => user?.isChecked !== true).length < 1
                  // }
                  checked={!users.some((user) => user?.isChecked !== true)}
                  onChange={handleChange}
                />

                <label>All Select</label>
              </div>
              {users.map((user) => (
                <div>
                  <input
                    type="checkbox"
                    name={user.name}
                    checked={user?.isChecked || false}
                    onChange={handleChange}
                  />
                  <label>{user.name}</label>
                </div>
              ))}
            </Formul>

            <br></br>
            <label class="nota">fields with (*) are required</label>

            <ContenedorBotonCentrado>
              <button type="submit" class="btn btn-primary btn-block">
                Enviar
              </button>
              {formularioValido === true && (
                <MensajeExito>SENT SUCCESFULLY</MensajeExito>
              )}
            </ContenedorBotonCentrado>

            {formularioValido === false && (
              <MensajeError>
                <p class="alert">
                  <b>Error:</b> FILL IN THE FORM CORRECTLY
                </p>
              </MensajeError>
            )}
          </form>
        </section>
      </section>
    </section>
  );
}
