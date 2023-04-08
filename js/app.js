import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");//seleccionamos todos los elementos input

inputs.forEach((input) =>{
    input.addEventListener("blur", (input) => {
        valida(input.target);
    })
})



