'use strict';

import { validateString,vAvg, checkAvg } from "./validate.js";
import{ paintCard, addStudent, modalAlert, camposxRol, addProfe} from "./paint.js";

const btnAgregar = document.querySelector('#btnAgregar');
const btnMostrar= document.querySelector('#btnMostrar');
const seleccionRol = document.querySelector('#opcion');
const formu = document.querySelector('#form') 


/* GENERAR EVENTOS
1. Colocando el método en el atributo onclick, onmouseover, onmouseout de la etiqueta
    //FUNCION PARA CAPTURAR EL EVENTO
    /*const captura = ()=>{
        alert("Hola");
    }*/
    //onclick="captura()" -> poner en el html para capturar evento


/*2. Mediante propiedad
btnAgregar.onclick = function(){
    console.log('evento mediante propiedad')
}
*/

/*

*3 Mediante el addEventListener
btnMostrar.addEventListener("click", function (){
    paintCard("ESTUDIANTE");
 });
*/

seleccionRol.onclick = function(){
    const tip = document.getElementById('opcion').value;
    console.log(tip);
    camposxRol(tip);
}




    btnAgregar.onclick = function(){
        const op = document.getElementById('opcion').value;
        if(op == "estudiante"){
            const name = document.getElementById('nombre').value;
            const lastName = document.getElementById('apellido').value;
            const avg = parseFloat(document.getElementById('promedio').value);
            console.log(`${name} ${lastName} ${avg} ${op}`);
            if(validateString(name) && validateString(lastName) && op == "estudiante"){
                if((!isNaN(avg)) && (vAvg(avg))){
                    addStudent(name, lastName, avg);
                    modalAlert("Se agregó el Estudiante");

                }else{
                    document.querySelector('#promedio').value="";
                    modalAlert("Promedio Inválido");
                }
            }else{
                modalAlert("Datos inválidos, revisar los datos");
    
            }
            

        }if(op == "profesor"){
            const name = document.getElementById('nombre').value;
            const lastName = document.getElementById('apellido').value;
            const especialidad = document.getElementById('especialidad').value;
            const edad= document.getElementById('edad').value;
            console.log(`${name} ${lastName} ${especialidad} ${op}`);
            if(validateString(name) && validateString(lastName) &&  validateString(especialidad) && op == "profesor"){
                addProfe(name,lastName,especialidad, edad);
                modalAlert("Se agregó el Profesor")
            }else{
                modalAlert("Datos inválidos, revisar los datos");
            }
            
        }
        
            document.querySelector('#nombre').value="";
            document.querySelector('#apellido').value="";
            document.querySelector('#promedio').value="";
            document.querySelector('#edad').value="";
            document.querySelector('#especialidad').value="";
     }

            
     //formu.reset();
     //console.log(`${name} ${lastName} ${avg} ${op}`);

    btnMostrar.addEventListener("click", function (){

    const op = document.getElementById('opcion').value;
    
    if(op == "profesor"){
        paintCard("PROFESOR");
    }
    if(op == "estudiante"){
        paintCard("ESTUDIANTE");
    }
    
 });
 
 /*
 *TO DO
+ que es la funcion ISNAN
+ Agregar el modal en el alert en el addstudent
+ Borrar campos una vez agregado el estudiante
+ Crear card para profesor, egresado, administrativo
+ Crear el de select
  */