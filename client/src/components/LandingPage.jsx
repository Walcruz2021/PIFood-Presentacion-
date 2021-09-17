import React from 'react' 
import {Link} from 'react-router-dom'
import {LandingP} from "./StylesGral/LandingPage.css"
export default function LandingPage(){

return(
    <div class="image-fondo">
        <h1 class="tittle">Welcome to My Recipe</h1>
        <Link to="/home">    
          <button class="button1">Ingresar</button>
        </Link>
    </div>
);
}