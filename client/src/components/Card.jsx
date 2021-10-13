import React from "react";
//import Cardis from "./StylesGral/Card.css"
import { Link } from "react-router-dom";
import cards from "./StylesGral/Home.css";

export default function Card({ id, name, image, score, TypeDiets }) {
  //console.log(id,"card")
  return (
    <div class="container">
    <div className="card text-center bg-dark">
      {/*bg-dark estilo negrto a la card*/}
      {/*animate__animated animate__fadeOut*/}
      <div className="overflow">
        <img
          src={image}
          alt="imagen no found"
          width="50px"
          heith="75px"
          className="card-img-top"
        />
      </div>
      <div className="car-body text-light">
        <h4 className="card-title">{name}</h4>
        <h4 className="card-text">Score: {score}</h4>
        {/* text-secondary texto tenue */}
        {/* <h4 className="card-text text-secondary">Type Diets</h4>
        {TypeDiets ? (
          TypeDiets.map((e) => <li>{e}</li>)
        ) : (
          <p>no tiene TP asociado</p>
        )}
        {typeDiets.map(e=><li>{e}</li>)} */}
     
      </div>
      <Link to={"/details/" + id}>
                    <button
                      type="submit"
                      className="btn btn-outline-secondary rounded-0"
                    >
                      {/* border NO redondeado rounded-0 */}
                      Go Details
                    </button>
                  </Link>
    </div>
    </div>
  );
}
