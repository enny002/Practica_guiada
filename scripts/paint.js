'use strict';
import {checkAvg} from './validate.js';
const cardE =document.getElementById('cardsEstudiantes');
const cardPro = document.getElementById('cardseProfesores');
const students = [];
const profes = [];

//Mostrando campos según el rol 

const camposxRol = (tip) =>{

    switch (tip) {
        case "profesor":
          const labelEsp=document.getElementById("labelEsp");
          const especialidad=document.getElementById("especialidad");
          const labelEdad=document.getElementById("labelEdad");
          const edad=document.getElementById("edad");
          const labelProm=document.getElementById("labelProm");
          const promedio=document.getElementById("promedio");
          labelEsp.classList.remove("oculto");
          especialidad.classList.remove("oculto");
          labelEdad.classList.remove("oculto");
          edad.classList.remove("oculto");
          labelProm.classList.add("oculto");
          promedio.classList.add("oculto");
          console.log(especialidad, edad, promedio)
          break;
    
        case "estudiante":
          const labelEsp2=document.getElementById("labelEsp");
          const especialidad2=document.getElementById("especialidad");
          const labelEdad2=document.getElementById("labelEdad");
          const edad2=document.getElementById("edad");
          const labelProm2=document.getElementById("labelProm");
          const promedio2=document.getElementById("promedio");
          labelProm2.classList.remove("oculto");
          promedio2.classList.remove("oculto");
          labelEsp2.classList.add("oculto");
          especialidad2.classList.add("oculto");
          labelEdad2.classList.add("oculto");
          edad2.classList.add("oculto");
          break;
    
        default:
          const labelEsp3=document.getElementById("labelEsp");
          const especialidad3=document.getElementById("especialidad");
          const labelEdad3=document.getElementById("labelEdad");
          const edad3=document.getElementById("edad");
          const labelProm3=document.getElementById("labelProm");
          const promedio3=document.getElementById("promedio");
          labelProm3.classList.add("oculto");
          promedio3.classList.add("oculto");
          labelEsp3.classList.add("oculto");
          especialidad3.classList.add("oculto");
          labelEdad3.classList.add("oculto");
          edad3.classList.add("oculto");
      }
    
}

const paintCard = (typ) =>{
    typ = typ.toUpperCase();
    switch (typ){
        case "PROFESOR":
            const templateProfe = document.querySelector('#templateProfesor').content;
            const fragmentProfesor = document.createDocumentFragment();
            for(let i of profes){
                const cloneTemp = templateProfe.cloneNode(true);
                console.log(cloneTemp);
                cloneTemp.querySelector('.titulo').innerHTML = '<strong> Datos Profesor </strong>';
                cloneTemp.querySelector('.datos').innerHTML = `<i>${i.nombre.toUpperCase()} ${i.apellido.toUpperCase()}</i>`;
                cloneTemp.querySelector('.edad').innerHTML = `Edad: ${i.edad}`;
                cloneTemp.querySelector('.text-especialidad').innerHTML = `Especialidad:${i.especi}`;
                fragmentProfesor.appendChild(cloneTemp);
            }
            cardPro.appendChild(fragmentProfesor);
        break;

        case "ESTUDIANTE":
            const fragment = document.createDocumentFragment();
            const templateEstudent =document.querySelector("#templateEstudiante").content;
            for(let i of students){
                const cloneTemp = templateEstudent.cloneNode(true);
                console.log(cloneTemp);
                cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i>Estudiante</i>";
                cloneTemp.querySelector('.data-card').innerHTML = `${i.nom.toUpperCase()}  ${i.ape.toUpperCase()} `;
                cloneTemp.querySelector('.text-promedio').innerHTML=`Pomedio: ${i.prom}`;
                cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.prom)}`;
                fragment.appendChild(cloneTemp);
            }
            cardE.appendChild(fragment);
        break;
        

    }  
};

//OBJETO PARA GUARDAR DATOS DEL ESTUDIANTE 
const addStudent=(name, lastName, avg)=>{
    //Objeto literal de JS
    let student = {
        nom: name,
        ape: lastName,
        prom: avg
    }
    students.push(student); //Guardar objeto dentro del arreglo students
};

//GUARDAR DATOS PROFESOR
const addProfe=(nomb, apell,espe, age)=>{
    let prof = {
        nombre: nomb,
        apellido: apell,
        especi: espe,
        edad: age
    }
    profes.push(prof);
    console.info(profes)
};


const modalAlert=(cad)=>{ 
    const alerta= document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src='./img/boton-x.png';
    img.className="close";
    texto.setAttribute("class","textAlerta");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class","alerta");
    texto.innerHTML= `<strong>${cad}</strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick = function(){
        document.getElementById("alerta").remove();
    }
}





export{paintCard,addStudent,modalAlert, camposxRol,addProfe};
