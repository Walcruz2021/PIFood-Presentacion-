import styled,{css} from "styled-components"

const colores={
borde:"#0075FF",
error:"#bb2929",
exito:"#1ed12d"
}

const Formul=styled.form`

grid-template-columns:1fr 1fr;
gap:20px;


@media(max-width:800px){
    grid-template-columns:1fr;
}

`;

const Labels=styled.label `
display:block;
font-weight:700;
padding:10 px
min-height:40px
cursos:pointer;

${props=>props.valido==='false' && css`
color:${colores.error};
`}

`;

const GrupoInp=styled.div`
position:relative;
z-index:90;
`;

const Inpt=styled.input`
width:100%;
background:#fff;
border-radius:3px
height:45px;
line-height:45px;
padding:0 40 px 0 10px;
transition:.3s ease all;
border:3px solid transparent;
margin-top:0;

&:focus{
    border:3px  solid ${colores.borde};
    outline:none;
    box-shadow:3px 0px 30px rgba(163,163,163,0.4)
}

${props=>props.valido==='true' && css `
  border:3px solid trasparent;
`}

${props=>props.valido==='false' && css `
  border:3px solid ${colores.error} !important;
`}

`;

const LeyendaError=styled.p`
font-size:12px;
margin-bottom:0;
color:${colores.error};
display:none;

${props=>props.valido==='true' && css `
  display:none
`}

${props=>props.valido==='false' && css `
  display:block;
`}

`;

const ContenedorTerminos=styled.div`
grid-column: span 2;

input {
    margin-right:10px
}

@media(max-width:800px){
    grid-column:span 1;
}

}
`;

const ContenedorBotonCentrado=styled.div`
display:flex;
flex-direction:column;
align-item:center;
grid-column:span 2;


@media(max-width:800px){
    grid-column:span 1;
}
`;

const Boton=styled.button`
float:left;
height:45px;
line-height:45px;
width:30%;
background:#000080;
color:#fff;
font-weight:bold;
border:none;
border-radius:3px;
cursor:pointer;
transition:.1s ease all;
&:hover{
    box-shadow:3px 0px 30px rgba(163,163,163,1);
}
`;

const Boton2=styled.button`
float:right;
height:45px;
line-height:45px;
width:30%;
background:#000;
color:#fff;
font-weight:bold;
border:none;
border-radius:3px;
cursor:pointer;
transition:.1s ease all;
&:hover{
    box-shadow:3px 0px 30px rgba(163,163,163,1);
}
`;


const MensajeExito=styled.p`
font-size:14px;
color:${colores.exito};
`;

const MensajeError=styled.div`
height:45px;
line-height:45px;
background=#F66060; 
padding:0px 15px;
border-radius:3px;
grid-column:span 2
p{
    margin:0
}

b{
    margin-left:10px
}
`;


export {
    Formul,
    Labels,
    GrupoInp,
    Inpt,
    LeyendaError,
    ContenedorTerminos,
    ContenedorBotonCentrado,
    Boton,
    Boton2,
    MensajeExito,
    MensajeError, 
    
};